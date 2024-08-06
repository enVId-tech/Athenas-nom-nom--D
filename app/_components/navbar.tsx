import React from "react";
import styles from "@/styles/navbar.module.scss";

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
        <nav className={styles.navbarMain}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}