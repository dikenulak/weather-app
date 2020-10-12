import { observer } from 'mobx-react';
import React from 'react';
import LoaderHtml from './components/LoaderHtml';
import APICall from './store/APICallStore';
import { dateString, timeString } from './utils/dateTimeConverter';
import { CELCIUS, FAHRENHEIHT } from './utils/enums';

const TopSection = observer(({setUnitCallback , timezone, current}) => (
	<section className="top-info flex flex-col justify-betw txt-center">
		<div className="selection">
			<div>
				<input
					type="radio"
					id={FAHRENHEIHT.name}
					checked={FAHRENHEIHT.unit === APICall.unit}
					name={FAHRENHEIHT.name}
					onChange={(e) => setUnitCallback(FAHRENHEIHT.unit)}
				/>
				<label htmlFor={FAHRENHEIHT.name}>{FAHRENHEIHT.name}</label>
			</div>
			<div>
				<input
					type="radio"
					id={CELCIUS.name}
					name={CELCIUS.name}
					checked={CELCIUS.unit === APICall.unit}
					onChange={(e) => setUnitCallback(CELCIUS.unit)}
				/>
				<label htmlFor={CELCIUS.name}>{CELCIUS.name}</label>
			</div>
		</div>
		<div className="time-info">
			<h1>{timezone}</h1>
			<div className="bold">
				{dateString(current.dt)}-{timeString(current.dt)}
			</div>
			<div>Sunrise: {timeString(current.sunrise)}</div>
			<div>Sunset: {timeString(current.sunset)}</div>
			<div>
				Temperature:{' '}
				<span className="bold">
					{current.temp} {`${APICall.unit === FAHRENHEIHT.unit ? FAHRENHEIHT.symbol : CELCIUS.symbol}`}
				</span>
			</div>
			<div>
				Feels like:{' '}
				<span className="bold">
					{current.feels_like} {`${APICall.unit === FAHRENHEIHT.unit ? FAHRENHEIHT.symbol : CELCIUS.symbol}`}
				</span>
			</div>
		</div>
    {APICall.dataLoading && <LoaderHtml />}
	</section>
));

export default TopSection;
