import React from 'react';
import styles from '@/styles/homepage.module.scss';

export default async function HomePage(): Promise<React.JSX.Element> {
    return (
        <section className={styles.homepageMain}>
            <h1 className={styles.title}>Welcome to the homepage</h1>
        </section>
    )
}