'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from 'next/image';





// useEffect(() => {

// }, [city]);



export default function Home() {

  const [city, setCity] = useState('');


   // Function to handle form submission
   const handleSubmit = async (event : React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      // Make a fetch request to the weather API with the city input
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=cb61364190d9fb85a02a68fc9973417c`);
      const data = await response.json(); // Parse the JSON response
      console.log(data); // Log the data to the console
    } catch (error) {
      console.error('Error fetching weather data:', error); // Log any errors
    }
  };

  return (
    <>
      <div className={styles.wrapper}>

        {/* Header Section */}
        <header className={styles.appHeader}>
          <div className={styles.appLogo}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} /></div>
          <h1 className={styles.appTitle}>Breakfast BAP Weather App</h1>
        </header>

        {/* Main Section */}
        <main>

          <form className={styles.appSearch} onSubmit= {handleSubmit}>
            <input type="text" placeholder="Search city..." name="search" className={styles.inputWindow} onChange={(e) => setCity(e.target.value)}/>
            <button type="submit" className={styles.appButton}>Submit</button>
          </form>

        </main>

        {/* Footer Section */}
        <footer className={styles.appFooter}>
          <div className={styles.footerText}>Brought to you by Breakfast BAP</div>
        </footer>
      </div>
    </>
  );
}
