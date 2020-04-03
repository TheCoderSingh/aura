import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './dashboard.scss';

class Dashboard extends Component {
	state = {
		precautions: [],
		carryons: []
	}
	render() {
		return (
			<Container>
				<div className="dashboard">
					<Row>
						<Col md={4}>
							<div className="dashboard-box">
								<div className="dashboard-icon">
									<img src={process.env.PUBLIC_URL + '/images/precautions.svg'} alt="Precautions"></img>
								</div>
								<h4>Precautions</h4>
								<div className="dashboard-items">
									<ul>
										{this.state.precautions.slice(0, 3).map(precaution =>
											<li id={precaution.prec_id} key={precaution.prec_id}>{precaution.prec_desc}</li>
										)}
									</ul>
								</div>
							</div>
						</Col>
						<Col md={4}>
							<div className="dashboard-box">
								<div className="dashboard-icon">
									<img src={process.env.PUBLIC_URL + '/images/carryons.svg'} alt="Carry-Ons"></img>
								</div>
								<h4>Carry-Ons</h4>
								<div className="dashboard-items">
									<ul>
										{this.state.carryons.slice(0, 3).map(carryon =>
											<li id={carryon.carryon_id} key={carryon.carryon_id}>{carryon.carryon_desc}</li>
										)}
									</ul>
								</div>
							</div>
						</Col>
						<Col md={4}>
							<div className="dashboard-box">
								<div className="dashboard-icon">
									<img src={process.env.PUBLIC_URL + '/images/btt.svg'} alt="Best Travel Time"></img>
								</div>
								<h4>Best Travel Time</h4>
								<div id="dashboard-traveltime">
									{this.props.minDate ? this.props.minDate : "Check AQI"}
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container >
		)
	}

	async componentDidMount() {
		const precautionsUrl = "http://localhost:3002/api/precautions";
		await fetch(precautionsUrl)
			.then(res => res.json())
			.then((data) => {
				this.setState({
					precautions: data
				});
			})
			.catch((error) => {
				console.log("Error fetching precautions: " + error);
			});

		const carryonsUrl = "http://localhost:3002/api/carryons";
		await fetch(carryonsUrl)
			.then(res => res.json())
			.then((data) => {
				this.setState({
					carryons: data
				});
			})
			.catch((error) => {
				console.log("Error fetching carryons: " + error);
			});
	};
}

export default Dashboard;
