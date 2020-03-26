import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.scss';
import { Row, Col } from 'react-bootstrap';

class NavbarTop extends Component {
	render() {
		return (
			<div className="navbarTop">
				<Row>
					<Col xs={9}>
						<div className="logo">
							{/* <img src={process.env.PUBLIC_URL + '/images/logo.svg'} /> */}
						</div>
					</Col>
					<Col xs={3}>
						<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
							{/* <Navbar.Brand href="/#">Aura</Navbar.Brand> */}
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link href="/#">Home</Nav.Link>
									<Nav.Link href="/#">iAura</Nav.Link>
									<Nav.Link href="/#">Team</Nav.Link>
									<Nav.Link href="/#">Contact</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar >
					</Col>
				</Row>
			</div>
		);
	}
}

export default NavbarTop;
