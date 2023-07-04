import 'normalize.css';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import Navigation from '../components/global/nav';
import styles from './layout.module.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>JonathanRayGarcia.com</title>
            </head>
            <body className={styles.layout}>
                <Header />
                <section>{ children }</section>
                <Footer />
                {/*<Navigation />*/}
            </body>
        </html>
    )
};