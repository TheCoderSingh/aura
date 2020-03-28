import React, { Component } from 'react';
import Chart from 'chart.js';
import './graph.scss';

class Graph extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<canvas id="aqiGraph"></canvas>
		);
	}

	componentDidMount() {
		let aqiGraph = document.getElementById("aqiGraph");

		let colors = ['#00ff00', '#ffff00', '#ff9900', '#ff0000', '#a64d79', '#cc0000', '#eeaabb'];
		let chartData = {
			labels: ["April 05", "April 06", "April 07", "April 08", "April 09", "April 10", "April 11", "April 12"],
			datasets: [{
				data: [146, 140, 134, 154, 155, 132, 136, 145],
				// data: data,
				backgroundColor: colors,
				barPercentage: 0.6
			}]
		};

		if (aqiGraph) {
			new Chart(aqiGraph, {
				type: 'bar',
				data: chartData,
				options: {
					legend: {
						display: false
					},
					title: {
						display: true,
						text: 'AQI Index'
					}
				}
			});
		}
	}
}

export default Graph;
