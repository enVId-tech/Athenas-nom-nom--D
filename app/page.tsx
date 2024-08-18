import React from 'react';
import styles from '@/styles/homepage.module.scss';
import Link from 'next/link';
import GYS from '@/public/GYSLogo.png';
import Footer from './_components/footer';

export default async function HomePage(): Promise<React.JSX.Element> {
    return (
        <section className={styles.homepageMain}>
            <div className={styles.homepageTitle}>
                <div className={styles.title}>
                    <div className={styles.titleContent}>
                        <h4>Research Classes</h4>
                        <h1>Starting August 14</h1>
                        <p>Empowering the next generation of researchers</p>
                        <a className={styles.registerButton} href="/register">Register</a>
                    </div>
                </div>
            </div>

            <div className={styles.homepageContent}>
                <h2>Research Classes</h2>
                <div className={styles.mainResearch}>
                    <div className={styles.researchContent}>
                        <p>Our research classes are designed to help students develop their research skills and prepare them for a future in academia. We offer a variety of classes that cater to students of all ages and backgrounds.</p>
                        <button className={styles.registerButton}>Learn More</button>
                    </div>
                    <img src={GYS.src} alt="Research" />
                </div>

                <div className={styles.homepageAbout}>
                    <h2>About Us</h2>
                    <div className={styles.aboutContent}>
                        <img src={GYS.src} alt="About Us" />
                        <div className={styles.aboutText}>
                            <p>Global Youth Scholars is an educational organization that aims to provide students with the resources and support they need to succeed in their academic pursuits. We offer a variety of programs and classes that cater to students of all ages and backgrounds.</p>
                            <button className={styles.registerButton}>Learn More</button>
                        </div>
                    </div>
                </div>

                <div className={styles.statistics}>
                    <div className={styles.statistic}>
                        <h2>100+</h2>
                        <p>Students</p>
                    </div>
                    <div className={styles.statistic}>
                        <h2>10+</h2>
                        <p>Classes</p>
                    </div>
                    <div className={styles.statistic}>
                        <h2>5+</h2>
                        <p>Teachers</p>
                    </div>
                </div>

                <div className={styles.homepageContact}>
                    <h2>Contact Us</h2>
                    <div className={styles.contactContent}>
                        <div className={styles.contactText}>
                            <p>Have a question or need more information? Contact us today!</p>
                            <button className={styles.registerButton}>Contact Us</button>
                        </div>
                        <img src={GYS.src} alt="Contact Us" />
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}