import React from 'react';
import styles from '@/styles/homepage.module.scss';
import Link from 'next/link';

export default async function HomePage(): Promise<React.JSX.Element> {
    return (
        <section className={styles.homepageMain}>
            <div className={styles.homepageTitle}>
                <h1>Global Youth Scholars</h1>
            </div>

            <div className={styles.homepageContent}>
                <p>Welcome to the Global Youth Scholars program!</p>
            </div>
            <footer>
                <p>Developed by Erick Tran (<a href="https://github.com/envid-tech" target='_blank' rel="noreferrer noopener">enVIdTech</a>) for the <Link href="/">Global Youth Scholars</Link> program.</p>
            </footer>
        </section>
    )
}