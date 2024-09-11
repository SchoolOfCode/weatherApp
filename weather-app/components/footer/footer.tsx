import styles from './footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.appFooter}>
                <div className={styles.footerText}>
                    Brought to you by © Breakfast BAP
                </div>
            </footer>
        </>
    )
}