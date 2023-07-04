import { Alkatra, Inter} from 'next/font/google';
import styles from './about.module.css';

const inter = Inter({ subsets: ['latin'] });
const alkatra = Alkatra({ subsets: ['latin'] });

export default function aboutPage () {

    return (
        <>
            <section className={styles.about}>
                <h2 className={alkatra.className}>About Me</h2>
                <p className={inter.className}>As a seasoned Senior Fullstack Software Engineer, I bring to the table over a decade of experience in delivering high quality, innovative solutions for leading companies like Disney Streaming, the National Football League, and Metro-Goldwyn-Mayer Studio. Proactive and dedicated, I have been responsible for creating everything from the smallest microsites to some of the most heavily trafficked features on the web. I have thrived in fully remote work for over 5 years, with my most recent achievement being the successful integration of the IAB's Open Measurement (MOAT) SDK for video tracking at Disney Streaming. Furthermore, my passion for mentoring led me to train numerous non-developers to become proficient react developers at Disney. Before Disney, I held pivotal roles at NFL and MGM, spearheading projects like the redesign of NFL.com’s homepage, creating a unique viewing experience for Super Bowl commercials, and building MGM’s first mobile websites. My robust technical skills, combined with my strong leadership and collaborative capabilities, make me an ideal asset for any software engineering team.</p>
            </section>

            <section className={styles.skills}>
                <h2 className={alkatra.className}>Some Things I Like</h2>
            </section>
        </>
    );

}