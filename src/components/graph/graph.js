import React, { Component } from 'react';
import Chart from 'chart.js';
import './graph.scss';

class Graph extends Component {
	render() {
		return (
			<canvas id="aqiGraph"></canvas>
		);
	}

	componentDidMount() {
		let aqiGraph = document.getElementById("aqiGraph");

		let colors = ['#00ff00', '#ffff00', '#ff9900', '#ff0000', '#a64d79', '#cc0000'];
		let chartData = {
			labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
			datasets: [{
				data: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90],
				backgroundColor: colors,
				barPercentage: 1
			}]
		};

		if (aqiGraph) {
			new Chart(aqiGraph, {
				type: 'bar',
				data: chartData,
				options: {
					legend: {
						display: false
					}
				}
			});
		}
	}
}

export default Graph;
