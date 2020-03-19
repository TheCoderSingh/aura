import React, { Component } from 'react';
import './filters.scss';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Graph from '../graph/graph';

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
										<option value="Select Country" defaultValue>Select Country</option>
									</Form.Control>
									<Form.Control as="select">
										<option value="Select Province" defaultValue>Select Province</option>
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
}

export default Filter;
