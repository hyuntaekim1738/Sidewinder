// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import your page components
import Sessions from './Sessions.js';
import Login from './Login.js';

// Define your App component
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Sessions />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

// Export your App component
export default App;