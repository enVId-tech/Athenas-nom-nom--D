import React from 'react';
import Navbar from '../assets/ts/navbar.tsx';
import '../assets/scss/homepage.scss';
// @ts-expect-error Proper image
import img from "../assets/img/Logo.jpg";
import AnimationGlobal from '../assets/ts/animationGlobal.tsx';

const HomePage: React.FC = (): React.JSX.Element => {
    return (
        <section id="home">
            <Navbar />
            <AnimationGlobal />
            <div id="banner">
                <p id="banner_title">Global Youth Scholars</p>

                <p id="banner_desc">Welcome to the Global Youth Scholars homepage!</p>
            </div>

            <div id="homeabout">
                <p id="about_title">About</p>

                <div id="about_content">
                    <img src={img} alt="logo" />
                    <p id="about_text">Global Youth Scholars is a non-profit organization that aims to provide educational resources to underprivileged students around the world. We believe that education is a fundamental human right and that every child should have access to quality education. Our mission is to empower students to reach their full potential and become leaders in their communities. We offer a variety of programs and services to support students in their academic journey, including tutoring, mentorship, and scholarship opportunities. Join us in our mission to create a brighter future for all children!</p>
                </div>
            </div>

            <div id="homeinfo">
                <p id="info_title">Info</p>

                <div id="container">
                    <p id="info_content">Global Youth Scholars is a non-profit organization that aims to provide educational resources to underprivileged students around the world. We believe that education is a fundamental human right and that every child should have access to quality education. Our mission is to empower students to reach their full potential and become leaders in their communities. We offer a variety of programs and services to support students in their academic journey, including tutoring, mentorship, and scholarship opportunities. Find out more about our programs and how you can get involved!</p>
                    <a href="/about" id="info_link">Learn More</a>
                </div>
            </div>

            <div id="homecontact">
                <p id="contact_title">Contact</p>
                <p id="contact_content">nomnom content nyehehehe</p>
            </div>
        </section>
    )
}

export default HomePage;