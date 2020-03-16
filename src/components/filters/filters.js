import React, { Component } from 'react';
import './filters.scss';
import { Row, Col, Form, Button } from 'react-bootstrap';

class Filter extends Component {
	render() {
		return (
			<div className="filters-container">
				<Row>
					<Col xs={3}>
						<div className="filters-box">
							<Form>
								<Form.Group as={Col} controlId="formFilters">
									{/* <Form.label>Choose a country</Form.Label> */}
									<Form.Control as="select">
										<option value="Select Country" selected>Select Country</option>
									</Form.Control>
									<Form.Control as="select">
										<option value="Select Province" selected>Select Province</option>
									</Form.Control>
									<Form.Control as="select">
										<option value="Select City" selected>Select City</option>
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

					</Col>
				</Row>
			</div >
		);
	}
}

export default Filter;
