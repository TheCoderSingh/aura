import React from 'react';

const Country = ({ countries }) => {
	return (
		<React.Fragment>
			{
				countries.map((country) => (
					<option value={country.name} key={country.id} id={country.id}>{country.name}</option>
				))
			};
		</React.Fragment>
	);
}

export default Country;
