import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import APICallStore from './store/APICallStore';
import { dateString } from './utils/dateTimeConverter';
import WeatherCard from './components/WeatherCard';
import LoadingScreen from './components/LoadingScreen';
import weatherIcon from './assets/images/clouds.svg';
import TopSection from './TopSection';
import ChartSection from './ChartSection';

const App = observer(() => {
	const [ barchartData, setBarchartData ] = useState([]);

	const { weatherData } = APICallStore;

	const { current, daily, timezone } = weatherData;

	const getHourlyData = (dateTime) => {
		const filteredData = daily.filter((d) => dateString(d.dt) === dateString(dateTime));
		setBarchartData(filteredData);
	};

	useEffect(() => {
		APICallStore.getAPI();
	}, []);

	const setUnitCallback = (unit) => {
		APICallStore.getLoadedAPI(unit);
		setBarchartData([]);
	};

	const MainApp = observer(() => {
		return (
			<div className="App-main">
				<section className="flex align-center just-center pos-rel">
					<h1>Weather App</h1>
					<img src={weatherIcon} className="App-logo" alt="logo" />
				</section>
				<TopSection setUnitCallback={setUnitCallback} timezone={timezone} current={current} />
				<WeatherCard getHourlyData={getHourlyData} />
				{barchartData.map((tempData) => <ChartSection tempData={tempData} key={tempData.dt} />)}
			</div>
		);
	});

	return (
		<div className="App">
			<LoadingScreen children={<MainApp />} />
		</div>
	);
});

export default App;
