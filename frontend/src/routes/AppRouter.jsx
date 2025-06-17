// Basic routing for Signup page
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from '../Login_pages/Signup';
import Login from '../Login_pages/Login';
import UserDetails from '../UserDetails/UserDetails'; // Import UserDetails component
import Recipes from '../recipes-page/recipes'; // Import Recipes component
import ExploreRecipes from '../Explore_Recipes/ExploreRecipes'; // Import ExploreRecipes component
import COOKI from '../Cooki(AI)/COOKI'; // Import COOKI AI page
import RecipeDetails from '../Explore_Recipes/RecipeDetails'; // Import RecipeDetails component
import Ecommerce from '../shopping/Ecommerce';
import Cart from '../shopping/Cart';
import Wishlist from '../shopping/Wishlist';
import BuyNowPage from '../shopping/BuyNowPage'; // Import BuyNowPage component
import Doctor from '../Doctor/doctor'; // Import Doctor component

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userdetails" element={<UserDetails />} /> {/* Route for UserDetails */}
      <Route path="/recipes" element={<Recipes />} /> {/* Route for Recipes */}
      <Route path="/explore-recipes" element={<ExploreRecipes />} /> {/* Route for Explore Recipes */}
      <Route path="/explore-recipes/:name" element={<RecipeDetails />} /> {/* Route for Recipe Details */}
      <Route path="/cooki-ai" element={<COOKI />} /> {/* Route for COOKI(ai) */}
      <Route path="/shop" element={<Ecommerce />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/buy-now" element={<BuyNowPage />} /> {/* Route for BuyNowPage */}
      <Route path="/doctor" element={<Doctor />} /> {/* Route for Doctor page */}
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRouter;
