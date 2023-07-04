import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import styles from './footer.module.css';

const dancingScript = Dancing_Script({ subsets: ['latin'] })
export default function Footer () {

    return(
        <footer className={styles.footer}>
            <h3 className={dancingScript.className}>Thanks For Stopping By! </h3>
            <section className={styles.links}>
                <a href="https://www.linkedin.com/in/jonathan-ray-garcia/"
                    target="_blank">
                    <Image 
                        src="/linkedin-icon.png"
                        alt="LinkedIn icon"
                        width="25"
                        height="25" />
                </a>
                <a href="https://github.com/jrgtwo"
                    target="_blank">
                    <Image 
                        src="/github-icon-inverted.png"
                        alt="LinkedIn icon"
                        width="25"
                        height="25" />
                </a>
            </section>
        </footer>
    );

}