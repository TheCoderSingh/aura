import React, { Component } from 'react';
import './aboutus.scss';
import { Row, Col } from 'react-bootstrap';

class AboutUs extends Component {
	render() {
		return (
			<Row>
				<Col Col className="outer_box">
                    <p>No matter where you go in the world, you can never hide yourself from air pollution. Poor air quality 
                        is the major contributor to chronic diseases. Concerned with the environmental situation our team has come 
                        with the solution to contribute to the world by this project
                    </p>
					<Col className="inner_box">
						<p>Aura provides amazing features to travellers who are concerned about their health and the environment.
                           Now, user can not only check the air quality index of their destination country before the visit, but
                           also can gain little but important information like precautions-they can follow, carry on's-they can take
                           along and the best travel time if the current time to travel.
                        </p>
					</Col>
				</Col>
			</Row>
		);
	}
}

export default AboutUs;
