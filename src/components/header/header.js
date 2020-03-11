import React, { Component } from 'react';
import './header.scss';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Row>
				<Col>
					<header>
						<video autoPlay loop muted>
							<source type="video/mp4" src={process.env.PUBLIC_URL + '/video.mp4'}></source>
						</video>
					</header >
				</Col>
			</Row>
		);
	}
}

export default Header;
