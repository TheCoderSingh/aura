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
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<div id="map" className="map-container" >
			</div>
		)
	}

	componentDidMount() {
		let latlng = new window.google.maps.LatLng(39.305, -76.617);
		map = new window.google.maps.Map(document.getElementById('map'), {
			center: latlng,
			zoom: 5,
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

export default GoogleApiWrapper({
	apiKey: "AIzaSyBdw39llza3H7s6eK3R3HDS0ZYYEXgHnGo"
})(GoogleMap);
