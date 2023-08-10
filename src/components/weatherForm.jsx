const WeatherForm = (props) => {
	return (
		<div>
			<h1>Search a region</h1>
			<form onSubmit={(e) => props.submit(e)}>
				<input className="formInput" type="text" name="region" id="" />
				<button className="formBtn" type="submit">
					Look Up
				</button>
			</form>
		</div>
	);
};

export default WeatherForm;
