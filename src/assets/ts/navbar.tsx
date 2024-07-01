import React from "react";
import '../scss/navbar.scss';

const Navbar: React.FC = (): React.JSX.Element => {
    return (
        <nav id="navbar">
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;