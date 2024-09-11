import { useEffect, useState } from "react";
import styles from './header.module.css'
import Image from 'next/image';


export default function Header()
{
    return(<><header className={styles.appHeader}>
        <div className={styles.appLogo}>
          <Image src="/logo.png" alt="Logo" width={100} height={100} /></div>
        <h1 className={styles.appTitle}>Breakfast BAP Weather App</h1>
        </header></>);
}