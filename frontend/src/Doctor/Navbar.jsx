import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../recipes-page/recipes.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="navbar-item home" onClick={() => navigate('/recipes')}>Home</span>
      </div>
      <span className="navbar-item" onClick={() => navigate('/explore-recipes')}>Explore Recipes</span>
      <span className="navbar-item" onClick={() => navigate('/cooki-ai')}>COOKI(ai)</span>
      <span className="navbar-item" onClick={() => navigate('/shop')}>Shopping and Grocery</span>
      <span className="navbar-item doctor" onClick={() => navigate('/doctor')}>Doctor</span>
    </nav>
  );
};

export default Navbar;
