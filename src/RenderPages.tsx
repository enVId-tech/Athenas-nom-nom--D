import React from 'react';
import { BrowserRouter as Router, Routes as Pathhub, Route as Path, Navigate as Redirect } from 'react-router-dom'
import HomePage from './pages/homepage';

// SCSS
import './assets/scss/global.scss';
import AboutPage from './pages/about';
import EventsPage from './pages/events';
import ContactPage from './pages/contact';

const RenderPages: React.FC = (): React.JSX.Element => {
  return (
    <Router>
      <Pathhub>
        {/* Redirects */}
        <Path path="/*" element={<Redirect to="/" />} />
        <Path path="/about/*" element={<Redirect to="/" />} />
        <Path path="/events/*" element={<Redirect to="/" />} />
        <Path path="/contact/*" element={<Redirect to="/" />} />

        {/* Routes */}
        <Path path="/" element={<HomePage />} />
        <Path path="/about" element={<AboutPage />} />
        <Path path="/events" element={<EventsPage />} />
        <Path path="/contact" element={<ContactPage />} />
      </Pathhub>
    </Router>
  )
}

export default RenderPages;