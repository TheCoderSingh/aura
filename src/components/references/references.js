import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class References extends Component {
	render() {
		return (
			<Container className="mt-4 mb-4">
				<Row>
					<Col xs={12}>
						<div className="text-center">
							<h2>List of References</h2>
							<ol>
								<li></li>
							</ol>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default References;
