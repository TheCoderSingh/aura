import React, { Component } from 'react';
import './contactus.scss';
import { Form, Button, Col } from 'react-bootstrap';

class ContactUs extends Component {
	render() {
		return (

			<Form className="contactForm">

				<h3 className="text-center">LEAVE YOUR MESSAGE</h3>
				<h5 className="text-center mt-1">We'd love to hear from you</h5>
				<Form.Row>
					<Form.Group as={Col} controlId="firstName">
						<Form.Control type="text" placeholder="First Name *" />
					</Form.Group>

					<Form.Group as={Col} controlId="lastName">
						<Form.Control type="text" placeholder="Last Name" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="email">
					<Form.Control type="email" placeholder="E-mail *" />
				</Form.Group>

				<Form.Group controlId="msg">
					<Form.Control as="textarea" rows="7" placeholder="Message *" />
				</Form.Group>

				<Button className="contact_btn" variant="primary" type="submit">
					Submit
				</Button>
			</Form>

		);
	}
}

export default ContactUs;
