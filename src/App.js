import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<Footer />
			</div>
		);
	}
}

export default App;
