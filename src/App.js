import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Filter from './components/filters/Filter';
import GoogleMap from './components/map/map';
import Mailing from './components/mailing/mailing';
import Footer from './components/footer/footer';
import { Container } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Container fluid>
					<Navbar />
					<Header />
					<Filter />
					<GoogleMap />
					<Mailing />
					<Footer />
				</Container>
			</div>
		);
	}
}

export default App;
