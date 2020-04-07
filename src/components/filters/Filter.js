import React, { Component } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import Graph from '../graph/graph';
import './filters.scss';
import Country from './Country';
import State from './State';
import City from './City';
import Dashboard from '../dashboard/dashboard';

let states = [];
let cities = [];
let aqi;

class Filter extends Component {
	state = {
		countries: [],
		countrySelected: false,
		selectedCountryId: "",
		states: [],
		stateSelected: false,
		selectedStateId: "",
		cities: [],
		citySelected: false,
		selectedCity: "",
		dateSelected: false,
		selectedDate: "",
		aqi: "",
		minDate: ""
	};

	async componentDidMount() {
		const countryUrl = "http://aura.wmdd.ca/api/countries";
		await fetch(countryUrl)
			.then(res => res.json())
			.then((data) => {
				this.setState({
					countries: data
				});
			})
			.catch((error) => {
				console.log("Error fetching countries: " + error);
			});
	};

	async getStates(id) {
		const statesUrl = "http://aura.wmdd.ca/api/states/" + id;
		await fetch(statesUrl)
			.then(res => res.json())
			.then((data) => {
				this.setState({
					states: data
				});
				states.push(data);
			})
			.catch((error) => {
				console.log("Error fetching states: " + error);
			});

		return states;
	};

	async getCities(id) {
		const citiesUrl = "http://aura.wmdd.ca/api/cities/" + id;
		await fetch(citiesUrl)
			.then(res => res.json())
			.then((data) => {
				this.setState({
					cities: data
				});
				cities.push(data);
			})
			.catch((error) => {
				console.log("Error fetching states: " + error);
			});

		return cities;
	}

	updateStates = () => {
		let countrySel = document.getElementById("country-sel");
		let selectedCountryId = countrySel.options[countrySel.selectedIndex].id;

		if (selectedCountryId !== "c0")
			this.setState({
				countrySelected: true,
				selectedCountryId: selectedCountryId,
				states: [...this.state.states, this.getStates(selectedCountryId)]
			});
	};

	updateCities = () => {
		let stateSel = document.getElementById("state-sel");
		let selectedStateId = stateSel.options[stateSel.selectedIndex].id;

		if (selectedStateId !== "s0")
			this.setState({
				stateSelected: true,
				selectedStateId: selectedStateId,
				cities: [...this.state.cities, this.getCities(selectedStateId)]
			});
	};

	saveCity = () => {
		let citySel = document.getElementById("city-sel");
		let selectedCityId = citySel.options[citySel.selectedIndex].id;
		let selectedCity = citySel.options[citySel.selectedIndex].value;

		if (selectedCityId !== "ct0") {
			this.setState({
				citySelected: true,
				selectedCity: selectedCity,
			});
		}
	};

	saveDate = () => {
		let dateSel = document.getElementById("date-sel");
		let selectedDate = dateSel.value;

		if (selectedDate !== "yyyy-mm-dd") {
			this.setState({
				dateSelected: true,
				selectedDate: selectedDate,
			});
		}
		else {
			this.setState({
				dateSelected: false,
				selectedDate: "",
			});
		}
	};

	callback = (minAqiDate) => {
		this.setState({
			minDate: minAqiDate
		})
	}

	async checkAqi(cityName) {
		const token = "0eb4bf0012292cbdc57e682530d1f6a352894d7e";
		const city = cityName;
		const aqiUrl = `https://api.waqi.info/feed/${city}/?token=${token}`;

		await fetch(aqiUrl)
			.then(res => res.json())
			.then((data) => {
				aqi = data.data.aqi;

				if (aqi !== undefined) {
					this.setState({
						aqi: aqi
					});
				} else {
					alert(`AQI not available for ${this.state.selectedCity}`);
				}
			})
			.catch((error) => {
				console.log("Error fetching AQI: " + error);
			});
	};

	render() {
		return (
			<div id="filters-container" >
				<Row>
					<Col xs={1}></Col>
					<Col xs={3} className="vertical-center">
						<div className="filters-box">
							<Form>
								<Form.Group as={Col}>
									<Form.Control as="select" id="country-sel" onChange={this.updateStates}>
										<option value="Select Country" id="c0" defaultValue>Select Country</option>
										<Country countries={this.state.countries} />
									</Form.Control>
									<Form.Control as="select" id="state-sel" onChange={this.updateCities}>
										<option value="Select Province" id="s0" defaultValue>Select Province/State</option>
										<State states={this.state.states} />
									</Form.Control>
									<Form.Control as="select" id="city-sel" onChange={this.saveCity}>
										<option value="Select City" id="ct0" defaultValue>Select City</option>
										<City cities={this.state.cities} />
									</Form.Control>
									<Form.Control type="date" id="date-sel" onChange={this.saveDate}>
									</Form.Control>
								</Form.Group>
								<Button variant="primary" type="button" onClick={this.checkAqi.bind(this, this.state.selectedCity)}>
									Check AQI
 								</Button>
							</Form>
						</div>
					</Col>
					<Col xs={8}>
						<Graph data={this.state.aqi} date={this.state.selectedDate} parentCallback={this.callback} />
					</Col>
				</Row>
				<Dashboard minDate={this.state.minDate} />
			</div >
		)
	}
}

export default Filter;
