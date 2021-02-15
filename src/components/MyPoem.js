import React from 'react';
import { styleSheet } from '../styles';

const MyPoems = () => {
	return (
		<div
			style={{
				color: styleSheet.color,
				fontFamily: styleSheet.fontFamily,
				padding: styleSheet.padding,
			}}
		>
			<h1>SNOW IN THE MORNING</h1>
			<p>
				The couple is traveling up the mountain. <br />
				They have been traveling a long time to get to the mountain. <br />
				They left early with their son who strums <br />
				sweet songs with his fingers, <br />
				songs his mother sang when she was young, <br />
				singing sweetly like him for...
			</p>
		</div>
	);
};

export default MyPoems;
