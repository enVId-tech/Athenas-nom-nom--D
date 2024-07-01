import React from "react";
import '../scss/navbar.scss';
import img from '../img/Logo.jpg';

const Navbar: React.FC = (): React.JSX.Element => {
    return (
        <nav id="navbar">
            <div id="imgcontainer">
                <img src={img} alt="logo" onClick={() => window.location.href = "/home"} />
                <h1 onClick={() => window.location.href = "/home"}>Global Youth Scholars</h1>
            </div>
            <div id="navlinks">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/events">Events</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;