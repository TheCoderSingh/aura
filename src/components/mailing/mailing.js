import React, { Component } from 'react';
import './mailing.scss';
import { Row, Col, Form, Button } from 'react-bootstrap';

class Mailing extends Component {
	render() {
		return (
			<div id="mailingListOuter">
				<Row>
					<div className="mailingListContainer">
						<div className="mailingList">
							<h4>Join our mailing list</h4>
							<p>Get updates, straight to your inbox!</p>
							<Form className="mailingForm">
								<Form.Group as={Col}>
									<Form.Control type="email" placeholder="Enter your email here" id="mailingInp" />
								</Form.Group>
								<Button variant="primary" type="submit" id="mailingBtn">
									Submit
 							</Button>
							</Form>
						</div>
					</div>
					<div className="bgCircle"></div>
				</Row>
			</div>
		);
	}
}

export default Mailing;
