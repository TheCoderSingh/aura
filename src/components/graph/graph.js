import React, { Component } from 'react';
import Chart from 'chart.js';
import './graph.scss';

let aqis = [];
let bgColors = [];

class Graph extends Component {
	// constructor(props) {
	// 	super(props);
	// };

	state = {
		aqi: this.props.data,
		date: this.props.date,
		aqis: []
	};

	render() {
		let aqiGraph = document.getElementById("aqiGraph");
		let labels = [];

		let year = this.state.date.substring(0, 4);
		let month = this.state.date.substring(5, 7);
		let day = this.state.date.substring(8, 10);

		console.log(month);

		let monthName;

		switch (month) {
			case "01":
				monthName = "January";
				break;
			case "02":
				monthName = "February";
				break;
			case "03":
				monthName = "March";
				break;
			case "04":
				monthName = "April";
				break;
			case "05":
				monthName = "May";
				break;
			case "06":
				monthName = "June";
				break;
			case "07":
				monthName = "July";
				break;
			case "08":
				monthName = "August";
				break;
			case "09":
				monthName = "September";
				break;
			case "10":
				monthName = "October";
				break;
			case "11":
				monthName = "November";
				break;
			case "12":
				monthName = "December";
				break;
			default:
				console.log("Invalid month");
				break;
		}

		let getNewMonthName = (tempMonth) => {
			switch (tempMonth) {
				case "01":
					monthName = "January";
					return "February";
				case "02":
					monthName = "February";
					return "March";
				case "03":
					monthName = "March";
					return "April";
				case "04":
					monthName = "April";
					return "May";
				case "05":
					monthName = "May";
					return "June";
				case "06":
					monthName = "June";
					return "July";
				case "07":
					monthName = "July";
					return "August";
				case "08":
					monthName = "August";
					return "September";
				case "09":
					monthName = "September";
					return "October";
				case "10":
					monthName = "October";
					return "November";
				case "11":
					monthName = "November";
					return "December";
				case "12":
					monthName = "December";
					return "January";
				default:
					console.log("Invalid month");
					break;
			}
		};

		for (let i = 0; i < 10; i++) {
			let maxDays;
			if (month != 2) {
				if ((month % 2 != 0 && month <= 7) || (month % 2 == 0 && month > 7))
					maxDays = 31;
				else
					maxDays = 30
			} else {
				if (year % 4 == 0)
					maxDays = 29;
				else
					maxDays = 28;
			}

			let curDate = new Date();
			labels[0] = monthName + " " + curDate.getDate();
			labels[1] = monthName + " " + day;

			for (let i = 2; i <= 8; i++) {
				if ((parseInt(day) + i - 1) > maxDays) {
					let newMonthName = getNewMonthName(month);
					labels[i] = newMonthName + " " + (parseInt(day) + (i - 1) - maxDays);
				} else
					labels[i] = monthName + " " + (parseInt(day) + i - 1);
			}

			console.log(labels);
		}

		let chartData = {
			labels: labels,
			datasets: [{
				data: aqis,
				backgroundColor: bgColors,
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

		return (
			<canvas id="aqiGraph"></canvas>
		);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.data !== this.state.aqi) {
			this.setState({
				aqi: newProps.data,
				date: newProps.date
			});

			aqis[0] = newProps.data;

			for (let i = 1; i < 9; i++) {
				let rand = Math.floor(Math.random() * 6) + 2;
				let rand2 = Math.floor(Math.random() * 2) + 1;

				console.log(rand);

				if (rand2 == 1)
					aqis.push(aqis[0] + rand);
				else
					aqis.push(aqis[0] - rand);
			}

			this.setState({
				aqis: aqis
			});

			for (let i = 0; i < 9; i++) {
				if (aqis[i] >= 0) bgColors[i] = "#00ff00";
				if (aqis[i] >= 51) bgColors[i] = "#ffff00";
				if (aqis[i] >= 101) bgColors[i] = "#ff9900";
				if (aqis[i] >= 151) bgColors[i] = "#ff0000";
				if (aqis[i] >= 201) bgColors[i] = "#a64d79";
				if (aqis[i] >= 301) bgColors[i] = "#cc0000";
			}

			console.log(bgColors);
		}
	}
}

export default Graph;
