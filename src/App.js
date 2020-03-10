import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Container } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Container fluid>
					<Navbar />
					<Header />
					<Footer />
				</Container>
			</div>
		);
	}
}

export default App;
