import { Alkatra } from 'next/font/google';
import Link from 'next/link';
import styles from './nav.module.css';

const alkatra = Alkatra({ subsets: ['latin'] });

export default function Navigation () {

    return (
        <nav className={`${styles.navigation} ${alkatra.className}`}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    );

}