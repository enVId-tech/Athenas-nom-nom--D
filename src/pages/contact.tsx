import React from 'react';
import Navbar from '../assets/ts/navbar.tsx';
import '../assets/scss/homepage.scss';

const ContactPage: React.FC = (): React.JSX.Element => {
    return (
        <section id="contact">
            <Navbar />
            <div>
                <h1>Contact</h1>
            </div>
            <p>nomnom content nyehehehe</p>
        </section>
    )
}

export default ContactPage;