import { useState } from "react";
import WeatherForm from "./components/weatherForm";
import WeatherInfo from "./components/weatherInfo";

const App = () => {
	const [info, setInfo] = useState({});

	const handleSubmit = async (e) => {
		const value = e.target[0].value;
		e.preventDefault();
		const data = await fetchData(value);

		if (!data) {
			setInfo(data);
		} else {
			await setInfo({
				region: `Region: ${data.location.name}, ${data.location.country}`,
				date: `Date: ${data.location.localtime}`,
				temp: `Temp: ${data.current.temp_c} Cº`,
				humidity: `Humidity: ${data.current.humidity} %`,
				uv: `UV: ${data.current.uv}`,
				windSpeed: `Wind Speed: ${data.current.wind_kph} Km/H`,
			});
		}
	};

	const fetchData = async (zone) => {
		try {
			const res = await fetch(
				`http://api.weatherapi.com/v1/current.json?key=d68ca9a3462348eaab9190033230908&q=${zone}&aqi=yes`
			);
			if (!res.ok) {
				throw new Error("Baddddd");
			}
			return await res.json();
		} catch (error) {
			return false;
		}
	};

	return (
		<div>
			<WeatherForm submit={handleSubmit} />
			<WeatherInfo data={info} />
		</div>
	);
};

export default App;
