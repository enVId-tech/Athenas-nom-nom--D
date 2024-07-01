import React from 'react';
import { BrowserRouter as Router, Routes as Pathhub, Route as Path, Navigate as Redirect } from 'react-router-dom'
import Homepage from './pages/homepage';

// SCSS

const RenderPages: React.FC = (): React.JSX.Element => {
  return (
    <Router>
      <Pathhub>
        {/* Redirects */}
        <Path path="/*" element={<Redirect to="/" />} />

        {/* Routes */}
        <Path path="/" element={<Homepage />} />
      </Pathhub>
    </Router>
  )
}

export default RenderPages;