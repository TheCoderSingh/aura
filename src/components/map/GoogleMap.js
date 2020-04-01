import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
import './map.scss';

const style = {
	width: '100%',
	maxHeight: '340px'
}

class GoogleMap extends Component {
	render() {
		// let map = new window.google.maps.Map(document.getElementById('map'), {
		// 	center: new window.google.maps.LatLng(51.505, -0.09),
		// 	mapTypeId: window.google.maps.MapTypeId.ROADMAP,
		// 	zoom: 11,
		// });

		var waqiMapOverlay = new window.google.maps.ImageMapType({
			getTileUrl: function (coord, zoom) {
				return 'https://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=0eb4bf0012292cbdc57e682530d1f6a352894d7e";
			},
			name: "Air  Quality",
		});

		return (
			<div className="map-container" id="map">
				<Map
					google={this.props.google}
					zoom={11}
					style={style}
					center={new window.google.maps.LatLng(51.505, -0.09)}
					mapTypeId={window.google.maps.MapTypeId.ROADMAP}
				>
				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCV3jnecKNQQ2dl1ZI7VLNsJAJyiyDRICk"
})(GoogleMap);