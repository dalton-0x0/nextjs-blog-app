import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Foodie Blog</title>
                <link rel="icon" href="/blog.ico" />
            </Head>

            <div className={styles.container}>
                <h1>The Home Page</h1>
            </div>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
