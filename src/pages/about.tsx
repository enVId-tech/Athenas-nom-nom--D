import React from 'react';
import Navbar from '../assets/ts/navbar.tsx';
import '../assets/scss/homepage.scss';

const AboutPage: React.FC = (): React.JSX.Element => {
    return (
        <section id="about">
            <Navbar />
            <div id="abouttitle">
                <h1>About Us</h1>
            </div>
            <div id="aboutcontent">
                <p>content lolol</p>
            </div>
        </section>
    )
}

export default AboutPage;