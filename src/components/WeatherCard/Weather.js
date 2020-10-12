import { observer } from 'mobx-react';
import React from 'react';
import { dateString, timeString } from '../../utils/dateTimeConverter';
import { CELCIUS, FAHRENHEIHT } from '../../utils/enums';

const Weather = observer(({ getHourlyData, unit, temp }) => {
	return (
		<section key={temp.dt} className="card flex-col just-betw txt-center" onClick={() => getHourlyData(temp.dt)}>
			<div className="bold">{dateString(temp.dt)}</div>
			<div className="font-sm">Sunrise: {timeString(temp.sunrise)}</div>
			<div className="font-sm">Sunset: {timeString(temp.sunset)}</div>
			<div className="font-sm">
				Temperature:{' '}
				<span className="bold">
					{temp.temp.day} {`${unit === FAHRENHEIHT.unit ? FAHRENHEIHT.symbol : CELCIUS.symbol}`}
				</span>
			</div>
			<div className="font-sm">
				Feels like:{' '}
				<span className="bold">
					{temp.feels_like.day} {`${unit === FAHRENHEIHT.unit ? FAHRENHEIHT.symbol : CELCIUS.symbol}`}
				</span>
			</div>
		</section>
	);
});

export default Weather;
