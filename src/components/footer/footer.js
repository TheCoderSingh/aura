import React, { Component } from 'react';
import './footer.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (
			<Row>
				<Col>
					<footer>
						<p>Copyright &copy; 2020 - Aura</p>
						<Link to="/references">References</Link>
					</footer>
				</Col>
			</Row>
		);
	}
}

export default Footer;
