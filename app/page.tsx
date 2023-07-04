import { Alkatra, Inter} from 'next/font/google';
import Image from 'next/image';
import styles from './home.module.css';

const alkatra = Alkatra({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Page() {
 
    return (
        <>
            <section className={styles.home_image}>
                <div className={`${styles.starburst} ${alkatra.className}`} id="example-2">
                    <p>I&apos;m<br />a<br/ > SOFTWARE<br />ENGINEER!</p>
                </div>
            </section>
            <section className={styles.experience}>
                <ul>
                    <li>
                        <Image
                            src="/disney-plus.jpg"
                            alt="Disney+ Logo"
                            width="265"
                            height="150"
                        />
                        <p className={inter.className}>At Disney, as a Senior Software Engineer, I&apos;ve collaboratively steered all aspects of video players across major platforms, including DisneyPlus.com, StarPlus.com, plus.espn.com, NHL.tv, and Hulu.com. My role included integrating various third-party tracking suites like MOAT, Conviva, and Adobe, thereby boosting our analytic capabilities. Consistently delivering high-quality, peer-reviewed code, I navigated an Agile workflow, orchestrating new features, and resolving bugs efficiently, while also mentoring colleagues and transitioning them from Disney park roles to proficient developers through the Code Rosies program.</p>
                    </li>

                    <li>
                        <Image
                            src="/nfl-com.png"
                            alt="NFL.com Logo"
                            width="265"
                            height="150"
                        />
                        <p className={inter.className}>As a Senior Application Developer at NFL.com, I enhanced my skills in a dynamic, fast-paced environment while redesigning key elements such as the NFL.com homepage and videos page. I also crafted a unique viewing experience for Super Bowl commercials, an innovative feature that was marketed live during the game.</p>
                    </li>

                    <li>
                        <Image
                            src="/mgm-logo.jpg"
                            alt="Metro-Goldwyn-Mayer Logo"
                            width="265"
                            height="150"
                        />
                        <p className={inter.className}>As the Chief Front-End Developer at MGM, I leveraged my skills in CSS, HTML, and Javascript to deliver high-end sites, micro-sites, and redesigns, often as the sole developer ensuring quality and meeting tight deadlines. My significant contributions included building MGM&apos;s first mobile websites, a project I saw through from initial business interest to completion.</p>
                    </li>
                </ul>
            </section>
        </>
    );

}