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
								{/* <img src={process.env.PUBLIC_URL + '/images/logo.svg'} /> */}
							</div>
						</Col>
						<Col xs={3}>
							<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
								{/* <Navbar.Brand href="/#">Aura</Navbar.Brand> */}
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto">
										{/* <Route path="/aura" component={App} /><Nav.Link >Home</Nav.Link> */}
										{/* <Nav.Link href="/home">Home</Nav.Link> */}
										{/* <Nav.Link href="/iaura">iAura</Nav.Link>
										<Nav.Link href="/team">Team</Nav.Link>
										<Nav.Link href="/contact">Contact</Nav.Link> */}
										<Nav.Link><Link to="/home">Home</Link></Nav.Link>
										<Nav.Link><Link to="/iaura">iAura</Link></Nav.Link>
										<Nav.Link><Link to="/team">Team</Link></Nav.Link>
										<Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
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
