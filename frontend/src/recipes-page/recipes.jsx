import React from 'react';
import './recipes.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="navbar-item home" onClick={() => navigate('/recipes')} style={{ cursor: 'pointer' }}>Home</span>
      </div>
      <span className="navbar-item" onClick={() => navigate('/explore-recipes')} style={{ cursor: 'pointer' }}>Explore Recipes</span>
      <span className="navbar-item" onClick={() => navigate('/cooki-ai')} style={{ cursor: 'pointer' }}>COOKI(ai)</span>
      <span className="navbar-item" onClick={() => navigate('/shop')} style={{ cursor: 'pointer' }}>Shopping and Grocery</span>
      <span className="navbar-item doctor" onClick={() => navigate('/doctor')} style={{ cursor: 'pointer' }}>Doctor</span>
    </nav>
  );
};

const ExploreSection = () => {
  const navigate = useNavigate();
  const handleBoxClick = () => {
    navigate('/explore-recipes');
  };
  return (
    <div className="explore-section">
      <h1 className="explore-heading">Organize your Meal</h1>
      <div className="explore-description">
        <p>Organize your meal based on your requirement</p>
        <p>Eat healthy, live healthy, Be healthy ......</p>
        <p>Ask COOK(Ai) to suggest a good meal............</p>
      </div>
      <div className="explore-grid">
        <div className="explore-box" onClick={handleBoxClick}>
          <img src="https://img.icons8.com/color/96/dumbbell.png" alt="Gym" className="box-img" />
          <div className="box-title">GYM</div>
          <div className="box-sub">veg and non veg</div>
        </div>
        <div className="explore-box" onClick={handleBoxClick}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/051/785/629/small_2x/soccer-player-silhouette-player-shooting-png.png" alt="Sports" className="box-img" />
          <div className="box-title">Sports</div>
          <div className="box-sub">veg and non veg</div>
        </div>
        <div className="explore-box" onClick={handleBoxClick}>
          <img src="https://img.icons8.com/color/96/hospital-bed.png" alt="Patient" className="box-img" />
          <div className="box-title">Patient</div>
          <div className="box-sub">veg and non veg</div>
        </div>
        <div className="explore-box" onClick={handleBoxClick}>
          <img src="https://img.icons8.com/color/96/scale.png" alt="Weight loss" className="box-img" />
          <div className="box-title">Weight loss</div>
          <div className="box-sub">veg and non veg</div>
        </div>
        <div className="explore-box" onClick={handleBoxClick}>
          <img src="https://img.icons8.com/color/96/weight.png" alt="Weight gain" className="box-img" />
          <div className="box-title">Weight gain</div>
          <div className="box-sub">veg and non veg</div>
        </div>
        <div className="explore-box" onClick={handleBoxClick}>
          <img src="https://img.icons8.com/color/96/chef-hat.png" alt="Recipes" className="box-img" />
          <div className="box-title">Recipes</div>
          <div className="box-sub">veg and non veg</div>
        </div>
      </div>
    </div>
  );
};

const Recipes = () => {
  return (
    <div>
      <Navbar />
      <ExploreSection />
      {/* ...existing recipes page content... */}
    </div>
  );
};

export default Recipes;
