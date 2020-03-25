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
		let aqi, aqis = [];

		fetch('https://api.waqi.info/feed/vancouver/?token=0eb4bf0012292cbdc57e682530d1f6a352894d7e')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data.data);
				aqi = data.data.aqi;
				// aqis.push(aqi);
				aqis.push(aqi.toString());
			})
			.catch((error) => {
				console.log(error);
			});

		// console.log();

		let aqiGraph = document.getElementById("aqiGraph");

		// console.log(aqis);
		// let colors = ['#00ff00', '#ffff00', '#ff9900', '#ff0000', '#a64d79', '#cc0000'];
		let chartData = {
			labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
			datasets: [{
				data: aqis,
				backgroundColor: "00ff00",
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
