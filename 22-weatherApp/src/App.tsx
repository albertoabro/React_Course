
import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { WeatherDetail } from './components/WeatherDetail/WeatherDetail';
import { useWeather } from './hooks/useWeather'

function App() {

    const { weather, hasWeatherData, fetchWeather } = useWeather();
  
    return (
        <>
            <h1 className={styles.title}>Weather App</h1>
            <div className={styles.container}>
                <Form fetchWeather={fetchWeather}/>
                { hasWeatherData && <WeatherDetail weather={weather}/> }
            </div>
        </>
    )
}

export default App
