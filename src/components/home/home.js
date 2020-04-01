import React, { Component } from 'react';
import Header from '../header/header';
import Filter from '../filters/Filter';
import Mailing from '../mailing/mailing';
import GoogleMap from '../map/GoogleMap';

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