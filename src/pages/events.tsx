import React from 'react';
import Navbar from '../assets/ts/navbar.tsx';
import '../assets/scss/homepage.scss';

const EventsPage: React.FC = (): React.JSX.Element => {
    return (
        <section id="events">
            <Navbar />
            <div id="eventstitle">
                <h1>Events</h1>
            </div>
            <p>nomnom content nyehehehe</p>
        </section>
    )
}

export default EventsPage;