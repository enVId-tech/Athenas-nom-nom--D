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
                <div className={styles.mainResearch}>
                    <div className={styles.resource}>
                        <img src="/research.jpg" alt="Research" width={300} height={200} />
                        <h2>Research</h2>
                        <p>Our students have the opportunity to conduct research in various fields, including computer science, biology, and more.</p>
                    </div>
                    <div className={styles.resource}>
                        <img src="/publications.jpg" alt="Publications" width={300} height={200} />
                        <h2>Publications</h2>
                        <p>Our students have published their research in various journals and conferences.</p>
                    </div>
                    <div className={styles.resource}>
                        <img src="/community.jpg" alt="Community" width={300} height={200} />
                        <h2>Community</h2>
                        <p>Our students have the opportunity to connect with other students and professionals in their field.</p>
                    </div>
                </div>
            </div>
            <footer>
                <p>Developed by Erick Tran (<a href="https://github.com/envid-tech" target='_blank' rel="noreferrer noopener">enVIdTech</a>) for the <Link href="/">Global Youth Scholars</Link> program.</p>
            </footer>
        </section>
    )
}