const WeatherInfo = ({ data }) => {
	const dataValues = Object.keys(data);
	if (dataValues.length !== 0) {
		return (
			<div className="infoDisplay">
				<h2>Weather info</h2>
				{dataValues.map((value) => {
					return <p key={value}>{`${data[value]}`}</p>;
				})}
			</div>
		);
	} else if (!data) {
		return (
			<div className="infoDisplay error">
				<p>Error! Please enter a correct name</p>
			</div>
		);
	}
};

export default WeatherInfo;
