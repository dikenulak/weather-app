const mappedData = (obj) => {
	return Object.keys([ ...[], ...[ obj ] ][0])
		.sort()
		.filter((d) => d !== 'max' && d !== 'min')
		.map((d) => ({ x: d, y: [ ...[ obj ] ][0][d] }));
};

export { mappedData };
