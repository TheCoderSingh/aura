import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import ContactUs from './components/contactus/contactus';
import IAuraTabs from './components/iauratabs/iauratabs';
import Team from './components/team/team';
import Home from './components/home/home';
import References from './components/references/references';

class App extends Component {
	render() {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div className='App'>
					<Container fluid>
						<Navbar />
						<Route exact path='/' component={Home} />
						<Route path='/home' component={Home} />
						<Route path='/iaura' component={IAuraTabs} />
						<Route path='/team' component={Team} />
						<Route path='/contact' component={ContactUs} />
						<Route path='/references' component={References} />
						<Footer />
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
