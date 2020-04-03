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
						<a href="#">References</a>
					</footer>
				</Col>
			</Row>
		);
	}
}

export default Footer;
