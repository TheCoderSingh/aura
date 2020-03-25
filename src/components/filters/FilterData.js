import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Graph from '../graph/graph';

const FilterData = ({ countries }) => {
	return (
		<div id="filters-container">
			<Row>
				<Col xs={3}>
					<div className="filters-box">
						<Form>
							<Form.Group as={Col}>
								<Form.Control as="select">
									<option value="Select Country" defaultValue>Select Country</option>
									{countries.map((country) => (
										<option value={country.name} key={country.name}>{country.name}</option>
									))};
								</Form.Control>
								<Form.Control as="select">
									<option value="Select Province" defaultValue>Select Province/State</option>
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

export default FilterData;