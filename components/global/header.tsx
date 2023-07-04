import { Alkatra, Ballet, Dancing_Script } from 'next/font/google';
import Navigation from './nav';
import styles from './header.module.css';
const alkatra = Alkatra({ subsets: ['latin'] });
const ballet = Ballet({ subsets: ['latin'] });
const dancing_script = Dancing_Script({ subsets: ['latin']});

export default function Header () {

    return(
        <header>
            <h1 className={`${ballet.className} ${styles.heading_text}`}>
                <sup className={alkatra.className}>
                    THE <b className={dancing_script.className}>Exciting</b> <span>WORK<br />OF</span>
                </sup>
                Jonathan Ray Garcia
            </h1>
            <Navigation />
        </header>
    );

}