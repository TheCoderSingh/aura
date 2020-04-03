import React, { Component } from 'react';
import './aboutus.scss';
import { Row, Col } from 'react-bootstrap';

class AboutUs extends Component {
	render() {
		return (
			<Row>
				<div className="abtus">
					<img src={process.env.PUBLIC_URL + '/images/aboutusbgfull.png'}></img>
					<p>
						No matter where you go in the world, you can never hide yourself from air pollution. Poor air quality
						is the major contributor to chronic diseases. Concerned with the environmental situation our team has come
						with the solution to contribute to the world by this project.
               		</p>
				</div>
			</Row >
		);
	}
}

export default AboutUs;
