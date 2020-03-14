import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
	render() {
		const mapStyles = {
			width: '100%',
			height: '100%',
		};

		return (
			<div>
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
				<Marker position={{
					lat: 48.00,
					lng: -122.00
				}}
				/>
			</div >
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ''
})(GoogleMap);