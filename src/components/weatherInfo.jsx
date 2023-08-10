const WeatherInfo = ({ data }) => {
	const info = data;
	const dataValues = Object.keys(data);
	if (dataValues.length === 0) {
		return null;
	}

	console.log(info.region[0]);
	return (
		<div>
			<h2>Weather info</h2>
			{dataValues.map((value) => {
				return <p key={value}>{`${info[value]}`}</p>;
			})}
		</div>
	);
};

export default WeatherInfo;
