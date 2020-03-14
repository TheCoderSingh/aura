import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Map from './components/map/map';
import Footer from './components/footer/footer';
import { Container } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Container fluid>
					<Navbar />
					<Header />
					<Map />
					<Footer />
				</Container>
			</div>
		);
	}
}

export default App;
