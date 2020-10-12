import React from 'react';
import { dateString } from './utils/dateTimeConverter';
import { HorizontalGridLines, VerticalBarSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis';
import { mappedData } from './utils/mapper';
import { observer } from 'mobx-react';
import APICallStore from './store/APICallStore';
import { CELCIUS, FAHRENHEIHT } from './utils/enums';

const ChartSection = observer(({ tempData }) => {
	const { unit } = APICallStore;
	return (
		<section key={tempData.dt} className="chart txt-center">
			<h3 className="bold">{dateString(tempData.dt)}</h3>
			<XYPlot
				margin={{ bottom: 50 }}
				padding={20}
				xType="ordinal"
				width={300}
				height={300}
				animation
				color="orange"
			>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis tickLabelAngle={-45} />
				<YAxis
					tickTotal={10}
					attr="y"
					attrAxis="x"
					orientation="left"
					position="end"
					title="temperature"
					tickFormat={(d) => `${d} ${unit === FAHRENHEIHT.unit ? FAHRENHEIHT.symbol : CELCIUS.symbol}`}
				/>
				<VerticalBarSeries className="vertical-bar-series-example" data={mappedData(tempData.temp)} />
			</XYPlot>
		</section>
	);
});

export default ChartSection;
