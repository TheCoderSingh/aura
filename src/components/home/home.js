import React, { Component } from 'react';
import Header from '../header/header';
import Filter from '../filters/Filter';
import GoogleMap from '../map/map';
import Mailing from '../mailing/mailing';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Filter />
				<GoogleMap />
				<Mailing />
			</div>
		)
	}
}

export default Home;