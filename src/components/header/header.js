import React, { Component } from 'react';
import './header.scss';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<div>
				<Row>
					<header>
						<Col>
							<video autoPlay loop muted>
								<source type="video/mp4" src={process.env.PUBLIC_URL + '/video.mp4'}></source>
							</video>
						</Col>
						<div className="headerText">
							<Col xs={6}>
								<div className="headerText-left">
									<h1>Planning to travel?</h1>
									<p>Get to know about the air quality of your destination ahead of time.</p>
								</div>
							</Col>
							<Col xs={6}>
								<div className="headerText-right">
									<h3>Secure your trip</h3>
									<hr />
									<p>Know about the precautions you can follow, carry ons and best travel time to your destination.</p>
								</div>
							</Col>
						</div>
					</header >
				</Row>
				<Row>
					<div className="aqiMsg">
						<h2>Check the Air Quality Index of your destination.</h2>
						<hr />
					</div>
				</Row>
			</div>
		);
	}
}

export default Header;
