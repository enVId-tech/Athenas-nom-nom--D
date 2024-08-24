"use client";

import React from "react";
import styles from "@/styles/navbar.module.scss";
import GYS from "@/public/GYSLogo.png";
import Hamburger from "@/public/Hamburger.jpeg";

export default function Navbar(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    const toggleMenu = (): void => {
        setOpen(!open);
    }

    return (
        <div className={styles.navbarMain}>
            <div className={styles.navbarTitle}>
                <img src={GYS.src} alt="Global Youth Scholars" />
                <h1>Global Youth Scholars</h1>
            </div>
            {/* <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/publications">Publications</a>
                </li>
                <li>
                    <a href="/classes">Classes</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
            </ul> */}
            <img src={Hamburger.src} alt="Hamburger" onClick={() => toggleMenu} />
            
            <div className={open ? styles.menuOpen : styles.menuClosed}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/publications">Publications</a>
                <a href="/classes">Classes</a>
                <a href="/register">Register</a>
            </div>
        </div>
    )
}