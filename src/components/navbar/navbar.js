import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarTop extends Component {
	render() {
		return (
			<div>
				<div className="navbarTop">
					<Row>
						<Col xs={9}>
							<div className="logo">
								{/* <img src={process.env.PUBLIC_URL + '/images/logo.png'} /> */}
							</div>
						</Col>
						<Col xs={3}>
							<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto">
										<Link to="/home">Home</Link>
										<Link to="/iaura">iAura</Link>
										<Link to="/team">Team</Link>
										<Link to="/contact">Contact</Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar >
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default NavbarTop;
