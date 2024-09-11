import styles from "./page.module.css";
import Image from 'next/image';

export default function Home() {
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

          <form className={styles.appSearch}>
            <input type="text" placeholder="Search city..." name="search" className={styles.inputWindow} />
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
