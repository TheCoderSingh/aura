import React, { Component } from 'react';
import './footer.scss';
import { Row, Col } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<Row>
				<Col>
					<footer>
						<p>Copyright &copy; 2020 - Aura</p>
						<p>Terms & Conditions | All Rights Reserved</p>
					</footer>
				</Col>
			</Row>
		);
	}
}

export default Footer;
