import React from 'react';
import MyPoems from './MyPoems';
import { styleSheet } from '../styles';

const App = () => {
	const divStyle = {
		background: styleSheet.background,
		height: 800,
	};
	return (
		<div style={divStyle}>
			<h1 style={{ color: 'coral' }}>Welcome to My Page</h1>
			<MyPoems />
			<footer
				style={{ color: styleSheet.color, fontSize: styleSheet.fontSize }}
			>
				Thank You for Visiting My Page
			</footer>
		</div>
	);
};

export default App;
