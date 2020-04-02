import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import ContactUs from './components/contactus/contactus';
import AboutUs from './components/aboutus/aboutus';
import Team from './components/team/team';
import Home from './components/home/home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='App'>
					<Container fluid>
						<Navbar />
						<Route path='/' component={Home} />
						<Route path='/home' component={Home} />
						<Route path='/iaura' component={AboutUs} />
						<Route path='/team' component={Team} />
						<Route path='/contact' component={ContactUs} />
						<Footer />
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
