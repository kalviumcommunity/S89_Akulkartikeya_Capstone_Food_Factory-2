// Basic routing for Signup page
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../Login_pages/Signup';
import Login from '../Login_pages/Login';
// You can import Login and UserDetails similarly if needed

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRouter;
