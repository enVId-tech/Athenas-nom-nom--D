import React from 'react';
import Navbar from '../assets/ts/navbar.tsx';
import '../assets/scss/homepage.scss';

const HomePage: React.FC = (): React.JSX.Element => {
    return (
        <section id="home">
            <Navbar />
            <div id="hometitle">
                <h1>Homepage</h1>
            </div>
            <div id="homeabout">
                <h2>About</h2>
                <p>nomnom content nyehehehe</p>
            </div>
            <div id="homeinfo">
                <h2>Info</h2>
                <p>nomnom content nyehehehe</p>
            </div>
            <div id="homecontact">
                <h2>Contact</h2>
                <p>nomnom content nyehehehe</p>
            </div>

        </section>
    )
}

export default HomePage;