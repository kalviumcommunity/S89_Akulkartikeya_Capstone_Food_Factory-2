// Basic routing for Signup page
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../Login_pages/Signup';
import Login from '../Login_pages/Login';
import UserDetails from '../UserDetails/UserDetails'; // Import UserDetails component

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userdetails" element={<UserDetails />} /> {/* Route for UserDetails */}
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRouter;
