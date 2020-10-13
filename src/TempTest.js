import React, { Fragment } from 'react';
import axios from 'axios';

const TestAxios = ({ url }) => {
	const [ temp, setTemp ] = React.useState();
	const [ clouds, setClouds ] = React.useState();

	const fetchData = async () => {
    const response = await axios.get(url);
		setTemp(response.data.temp);
		setClouds(response.data.clouds);
	};
	return (
		<Fragment>
			<button onClick={fetchData} data-testid="fetch-data">
				Load Data
			</button>
			{temp ? (
				<div>
					<div data-testid="show-temp">{temp}</div>
					<div data-testid="show-clouds">{clouds}</div>

				</div>
			) : (
				<h1 data-testid="loading">Loading...</h1>
			)}
		</Fragment>
	);
};

export default TestAxios;
