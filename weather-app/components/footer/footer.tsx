import { useEffect, useState } from "react";
import styles from './header.module.css'
import Image from 'next/image';


export default function Footer()
{
    return(<><footer className={styles.appFooter}>
        <div className={styles.footerText}>Brought to you by Breakfast BAP</div>
        </footer>
        </>)
}