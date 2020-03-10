import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.scss';
import { Row, Col } from 'react-bootstrap';

class NavbarTop extends Component {
	render() {
		return (
			<Row>
				<Col>
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Brand href="/#">Aura</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/#">Home</Nav.Link>
								<Nav.Link href="/#">iAura</Nav.Link>
								<Nav.Link href="/#">Team</Nav.Link>
								<Nav.Link href="/#">Contact</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Col>
			</Row>
		);
	}
}

export default NavbarTop;
