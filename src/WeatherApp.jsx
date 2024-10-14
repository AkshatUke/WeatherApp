import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Pune",
        feelsLike: 29.69,
        humidity: 29,
        temp: 31.05,
        tempMax: 31.05,
        tempMin: 31.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center",}}>
            <h2>Weather App By Akshat Uke</h2>
            <SearchBox updateInfo={updateInfo} ></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}