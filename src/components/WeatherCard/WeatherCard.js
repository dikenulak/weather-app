import { observer } from 'mobx-react';
import React from 'react';
import APICallStore from '../../store/APICallStore';
import SliderStore from '../../store/SliderStore';
import Weather from './Weather';

const WeatherCard = observer(({ getHourlyData }) => {
	const index = SliderStore.sliderIndex;
	const unit = APICallStore.unit;
	const dailyTemperature = APICallStore.weatherData.daily;
	const dailyTemperatureArrayLength = dailyTemperature.length;

	const slideRight = () => {
		if (index === dailyTemperatureArrayLength - 1) {
			SliderStore.sliderIndexFunction(3);
		} else {
			SliderStore.sliderIndexFunction((index + 1) % dailyTemperatureArrayLength); // increases index by
		}
	};

	const slideLeft = () => {
		const nextIndex = index - 1;
		if (nextIndex < 3) {
			SliderStore.sliderIndexFunction(dailyTemperatureArrayLength - 1); // returns last index of images array if index is less than 0
		} else {
			SliderStore.sliderIndexFunction(nextIndex);
		}
	};

	const filteredTemperature = (temp) => {
		return temp.slice(index - 3, index);
	};

	return (
		<section>
			<div className="slider flex just-betw">
				<span onClick={slideLeft}>{'<'}</span>
				<span onClick={slideRight}>{'>'}</span>
			</div>
			<div className="flex">
				{filteredTemperature(dailyTemperature).map((temp) => (
					<Weather key={temp.dt} temp={temp} getHourlyData={getHourlyData} unit={unit} />
				))}
			</div>
		</section>
	);
});

export default WeatherCard;
