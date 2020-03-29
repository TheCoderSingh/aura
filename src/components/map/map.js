import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './map.scss';

class GoogleMap extends Component {
	render() {
		const mapStyles = {
			width: '100%',
			height: '100%',
		};

		return (
			<div className="map-container">
				<Map
					google={this.props.google}
					zoom={8}
					style={mapStyles}
					initialCenter={{
						lat: 47.444,
						lng: -122.176
					}}
				/>
				{/* </Map > */}
				/>
			</div >
		);
	}
}

export default GoogleApiWrapper({
	// apiKey: 'AIzaSyCV3jnecKNQQ2dl1ZI7VLNsJAJyiyDRICk'
})(GoogleMap);