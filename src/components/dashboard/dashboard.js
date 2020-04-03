import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './dashboard.scss';

class Dashboard extends Component {
	render() {
		return (
			<Container>
				<div className="dashboard">
					<Row>
						<Col md={4}>
							<div className="dashboard-box">
								<div className="dashboard-icon">
									<img src={process.env.PUBLIC_URL + '/images/precautions.svg'}></img>
								</div>
								<h4>Precautions</h4>
								<p id="dashboard-precautions">
									<ul>
										<li>Precaution 1</li>
										<li>Precaution 2</li>
										<li>Precaution 3</li>
									</ul>
								</p>
							</div>
						</Col>
						<Col md={4}>
							<div className="dashboard-box">
								<div className="dashboard-icon">
									<img src={process.env.PUBLIC_URL + '/images/carryons.svg'}></img>
								</div>
								<h4>Carry-Ons</h4>
								<p id="dashboard-carryons">
									<ul>
										<li>Carry-On 1</li>
										<li>Carry-On 2</li>
										<li>Carry-On 3</li>
									</ul>
								</p>
							</div>
						</Col>
						<Col md={4}>
							<div className="dashboard-box">
								<div className="dashboard-icon">
									<img src={process.env.PUBLIC_URL + '/images/btt.svg'}></img>
								</div>
								<h4>Best Travel Time</h4>
								<p id="dashboard-traveltime">
									{this.props.minDate}
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container >
		)
	}
}

export default Dashboard;
