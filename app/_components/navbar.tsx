import React from "react";
import styles from "@/styles/navbar.module.scss";
import GYS from "@/public/GYSLogo.png";
import Link from "next/link";

async function getFetchData(): Promise<any> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    if (!data) {
        return null;
    }

    return data;
}

export default async function Navbar(): Promise<React.JSX.Element> {
    const data = await getFetchData();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.navbarMain}>
            <div className={styles.navbarTitle}>
                <img src={GYS.src} alt="Global Youth Scholars" />
                <h1>Global Youth Scholars</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/services">Publications</Link>
                </li>
                <li>
                    <Link href="/contact">Classes</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}