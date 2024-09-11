'use client'
import { useState } from "react";
import styles from "./main.module.css";

export default function WeatherApp() {

    const [city, setCity] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=cb61364190d9fb85a02a68fc9973417c`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

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
        </>
    )
}