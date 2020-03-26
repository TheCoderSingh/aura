import React from 'react';

const City = ({ cities }) => {
	return (
		<React.Fragment>
			{
				cities.map((city) => (
					<option value={city.name} key={"City" + city.id} id={city.id}>{city.name}</option>
				))
			};
		</React.Fragment>
	);
}

export default City;
