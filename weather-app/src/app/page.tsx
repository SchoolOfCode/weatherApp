'use client'
import styles from "./page.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import WeatherApp from "../../components/main/main";

export default function Home() {

  return (
    <>
      <div className={styles.wrapper}>

        {/* Header Section */}
        <Header />

        {/* Main Section */}
        <WeatherApp />

        {/* Footer Section */}
        <Footer />

      </div>
    </>
  );
}
