import React from "react";
import redirect from 'next/navigation';

export default function Navbar(): React.JSX.Element {
    return (
        <nav className="navbarMain">
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