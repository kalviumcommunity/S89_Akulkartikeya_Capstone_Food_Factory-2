// Basic routing for Signup page
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../Login_pages/Signup';
import Login from '../Login_pages/Login';
import UserDetails from '../UserDetails/UserDetails'; // Import UserDetails component
import Recipes from '../recipes-page/recipes'; // Import Recipes component
import ExploreRecipes from '../Explore_Recipes/ExploreRecipes'; // Import ExploreRecipes component
import COOKI from '../Cooki(AI)/COOKI'; // Import COOKI AI page

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userdetails" element={<UserDetails />} /> {/* Route for UserDetails */}
      <Route path="/recipes" element={<Recipes />} /> {/* Route for Recipes */}
      <Route path="/explore-recipes" element={<ExploreRecipes />} /> {/* Route for Explore Recipes */}
      <Route path="/cooki-ai" element={<COOKI />} /> {/* Route for COOKI(ai) */}
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRouter;
