import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.mercycorps.org/where-we-work/nigeria"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/logo.png" alt="Vercel Logo" width={72} height={30} />
                </span>
            </a>
        </footer>
    )
}
export default Footer