import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Graph from '../graph/graph';

let selectedCountry;
let states = [];

const FilterData = ({ countries, states }) => {
	return (
		<div id="filters-container">
			<Row>
				<Col xs={3}>
					<div className="filters-box">
						<Form>
							<Form.Group as={Col}>
								<Form.Control as="select" id="country-sel" value={selectedCountry} onChange={updateState.bind(this)}>
									<option value="Select Country" defaultValue>Select Country</option>
									{countries.map((country) => (
										<option value={country.name} key={country.id} id={country.id}>
											{country.name}
										</option>
									))};
								</Form.Control>
								<Form.Control as="select">
									<option value="Select Province" defaultValue>Select Province/State</option>
									{states.map((state) => {
										if (state.country_id === selectedCountry) {
											return (
												<option value={state.name} key={state.id} id={state.id}>{state.name}</option>
											)
										}
										return;
									})};
								</Form.Control>
								<Form.Control as="select">
									<option value="Select City" defaultValue>Select City</option>
								</Form.Control>
								<Form.Control type="date">
								</Form.Control>
							</Form.Group>
							<Button variant="primary" type="submit">
								Check AQI
 							</Button>
						</Form>
					</div>
				</Col>
				<Col xs={9}>
					<Graph />
				</Col>
			</Row>
		</div >
	);
}

let updateState = () => {
	let countrySel = document.getElementById("country-sel");
	let countryId = countrySel.options[countrySel.selectedIndex].id;

	console.log(countryId);

	let url = 'http://localhost:3002/api/states/' + countryId;
	fetch(url)
		.then(res => res.json())
		.then((data) => {
			states.push(data)
		})
		.catch(console.log());

	// for (let state in states)
	// 	console.log(state);

	console.log(states);
}

export default FilterData;
