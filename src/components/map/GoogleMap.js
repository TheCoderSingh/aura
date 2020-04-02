import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
import './map.scss';

const style = {
	width: '100%',
	maxHeight: '340px'
}

let map, waqiMapOverlay;

class GoogleMap extends Component {
	state = {
		latitute: "",
		longitude: ""
	};

	render() {
		return (
			<div id="map" className="map-container" >
			</div>
		)
	}

	componentDidMount() {
		let getUserLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(getCoordinates, showError);
			} else {
				console.log("Geolocation is not supported by this browser.");
			}
		}

		let getCoordinates = (position) => {

			this.setState({
				latitute: position.coords["latitude"],
				longitude: position.coords["longitude"]
			});

			createMap();
		}

		let showError = (error) => {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					console.log("User denied the request for Geolocation.");
					break;
				case error.POSITION_UNAVAILABLE:
					console.log("Location information is unavailable.");
					break;
				case error.TIMEOUT:
					console.log("The request to get user location timed out.");
					break;
				case error.UNKNOWN_ERROR:
					console.log("An unknown error occurred.");
					break;
				default:
					break;
			}

			this.setState({
				latitute: "49.282730",
				longitude: "-123.120735"
			});

			createMap();
		}

		getUserLocation(getCoordinates);

		let createMap = () => {
			let latlng = new window.google.maps.LatLng(this.state.latitute, this.state.longitude);

			map = new window.google.maps.Map(document.getElementById('map'), {
				center: latlng,
				zoom: 12,
				mapTypeId: window.google.maps.MapTypeId.ROADMAP,
			});

			waqiMapOverlay = new window.google.maps.ImageMapType({
				getTileUrl: function (coord, zoom) {
					return 'https://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=0eb4bf0012292cbdc57e682530d1f6a352894d7e";
				},
				name: "Air  Quality",
			});

			map.overlayMapTypes.insertAt(0, waqiMapOverlay);
		}
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBdw39llza3H7s6eK3R3HDS0ZYYEXgHnGo"
})(GoogleMap);
