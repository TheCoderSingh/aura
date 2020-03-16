import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Filter from './components/filters/filters';
import GoogleMap from './components/map/map';
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
					<Footer />
				</Container>
			</div>
		);
	}
}

export default App;
