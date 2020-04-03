import React, { Component } from 'react';
import './iaurahead.scss';
import { Row, Col } from 'react-bootstrap';

class IAuraHead extends Component {
	render() {
		return (
			<Row>
				<Col>
                    <p className = "heading1 font-weight-bold">Make big changes in small steps</p>
                    <p className="para">We are contributing 10% of the profit in saving the environment. </p>
                    <p className="para">Your small purchase can make a big change.</p>
                    <p className="para">Join us Today.</p>
                  
				</Col>
			</Row>
		);
	}
}

export default IAuraHead;
