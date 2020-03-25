import React, { Component } from 'react';
import './filters.scss';
import FilterData from './FilterData';

class Filter extends Component {
	state = {
		countries: []
	}

	componentDidMount() {
		fetch('http://localhost:3002/api/countries')
			.then(res => res.json())
			.then((data) => {
				this.setState({ countries: data })
			})
			.catch(console.log())
	}

	render() {
		return (
			<FilterData countries={this.state.countries} />
		)
	}
}

export default Filter;
