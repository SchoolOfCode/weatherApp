'use client'
import { useState } from "react";
import styles from "./main.module.css";
import Image from 'next/image';

export default function WeatherApp() {

    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<any>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb61364190d9fb85a02a68fc9973417c&units=metric`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const currentDate = new Date();
    const formattedDate = `
    ${currentDate.toLocaleDateString('en-UK', {
        weekday: 'short'
    })}, 
    ${currentDate.toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })}`;

    return (
        <>
            <form className={styles.appSearch} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search city..."
                    name="search"
                    className={styles.inputWindow}
                    onChange={(e) => setCity(e.target.value)} />
                <button
                    type="submit"
                    className={styles.appButton}>Submit</button>
            </form>

            {weatherData && (
                <div className={styles.appWeather}>
                    <p className={styles.weatherDate}>{formattedDate}</p>
                    <p className={styles.weatherCity}>{weatherData.name}, {weatherData.sys.country}</p>
                    <p className={styles.weatherTemp}>
                        <Image src="/thermometer.png" alt="Temp" width={40} height={40} />
                        {Math.round(weatherData.main.temp)}°C</p>
                    <p className={styles.weatherDesc}>Conditions: {weatherData.weather[0].description}</p>
                    <p className={styles.weatherTempLike}>
                        Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
                    <p className={styles.weatherMinMax}>
                        Min: {Math.round(weatherData.main.temp_min)}°C |
                        Max: {Math.round(weatherData.main.temp_max)}°C</p>
                </div>
            )
            }
        </>
    )
}