import styles from './footer.module.css'
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className={styles.appFooter}>
                <div className={styles.footerText}>
                    Brought to you by © Breakfast BAP
                </div>
                <Image src="/burger.png" alt="Bap" width={20} height={20} className={styles.footerBap}/>
            </footer>
        </>
    )
}