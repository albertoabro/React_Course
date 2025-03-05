import { Weather } from "../../hooks/useWeather"
import { kelvinToCelsius } from "../../utils/kelvinToCelsius";

import styles from './WeatherDetail.module.css';

type WeatherDetailProps = {
    weather: Weather;
};

export const WeatherDetail = ({weather}: WeatherDetailProps) => {
    return (
        <div className={styles.container}>
            <h2> Weather in: {weather.name}</h2>
            <p className={styles.current}> { kelvinToCelsius(weather.main.temp).toFixed(0) }&deg;C </p>
            <div className={styles.temperatures}>
                <p> Min Temperature: <span>{ kelvinToCelsius(weather.main.temp_min).toFixed(0) }&deg;C </span> </p>
                <p> Max Temperature: <span>{ kelvinToCelsius(weather.main.temp_max).toFixed(0) }&deg;C </span> </p>
            </div>
        </div>
    )
}
