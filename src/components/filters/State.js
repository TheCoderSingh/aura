import React from 'react';

const State = ({ states }) => {
	return (
		<React.Fragment>
			{
				states.map((state) => (
					<option value={state.name} key={"State" + state.id} id={state.id} > {state.name}</option>
				))
			};
		</React.Fragment >
	);
}

export default State;
