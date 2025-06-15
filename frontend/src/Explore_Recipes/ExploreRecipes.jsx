import React, { useState } from "react";
import "./ExploreRecipes.css";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const filters = ["All", "Starters", "Desserts", "Side dishes"];
const recipes = [
  {
    name: "Paneer Tikka",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWEwWfozDKGmqySOPdhysUBUJCBHRs9mpH3nEa5NBYVcl9ZiDyDg-9kLoVt38CT7d3aSNgKVal6HTqEKdIYiOZl0J3J7SAxSKiRlx1QMHxwSR2PO8i0KbeYxNFP_v5BD70k1zUqvDnJ9BH/s1600/Paneer_Tikka_5.jpg",
    nutrition: "Calories: 250 | Protein: 12g | Fat: 10g",
    type: "Veg",
  },
  {
    name: "Chicken Biryani",
    image: "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg",
    nutrition: "Calories: 350 | Protein: 20g | Fat: 15g",
    type: "Non Veg",
  },
  {
    name: "Gulab Jamun",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRo63UOtrFbuGdfeu_enKt26sIXTbea5HkWvuyMwy2cAmeHOR3R-XM7-FXNNodVS3g1I&usqp=CAU",
    nutrition: "Calories: 180 | Protein: 3g | Fat: 8g",
    type: "Veg",
  },
  {
    name: "French Fries",
    image: "https://www.budgetbytes.com/wp-content/uploads/2023/12/air-fryer-french-fries-horizontal-hero-web-ready-1-500x375.jpg",
    nutrition: "Calories: 300 | Protein: 4g | Fat: 17g",
    type: "Veg",
  },
  {
    name: "Spring Rolls",
    image: "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4.jpg",
    nutrition: "Calories: 220 | Protein: 5g | Fat: 9g",
    type: "Veg",
  },
  {
    name: "Fish Curry",
    image: "https://stewwithsaba.com/wp-content/uploads/2024/05/IMG_4409-edited.jpg",
    nutrition: "Calories: 320 | Protein: 22g | Fat: 12g",
    type: "Non Veg",
  },
  {
    name: "Brownie",
    image: "https://www.southernliving.com/thmb/eLSgazITlYrKf9EFTR9y1L2mSxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living-Homemade_Brownies_023-3c582f0fba1842dd918a3d9c26c1ab59.jpg",
    nutrition: "Calories: 400 | Protein: 6g | Fat: 20g",
    type: "Veg",
  },
  {
    name: "Caesar Salad",
    image: "https://www.feastingathome.com/wp-content/uploads/2021/10/Caesar-salad_-4.jpg",
    nutrition: "Calories: 150 | Protein: 7g | Fat: 5g",
    type: "Veg",
  },
];

// Navbar copied from recipes.jsx
const Navbar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/recipes');
  };
  const handleExploreRecipesClick = () => {
    navigate('/explore-recipes');
  };
  const handleCookiClick = () => {
    navigate('/cooki-ai');
  };
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="navbar-item home" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</span>
      </div>
      <span className="navbar-item" onClick={handleExploreRecipesClick} style={{ cursor: 'pointer' }}>Explore Recipes</span>
      <span className="navbar-item" onClick={handleCookiClick} style={{ cursor: 'pointer' }}>COOKI(ai)</span>
      <span className="navbar-item">Shopping and Grocery</span>
      <span className="navbar-item doctor">Doctor</span>
    </nav>
  );
};

function ExploreRecipes() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesFilter =
      selectedFilter === "All" ||
      (selectedFilter === "Starters" && recipe.name.match(/tikka|rolls|fries/i)) ||
      (selectedFilter === "Desserts" && recipe.name.match(/gulab|brownie/i)) ||
      (selectedFilter === "Side dishes" && recipe.name.match(/salad|fries/i));
    const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ background: '#FFF1DC', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <h1 className="explore-heading">Explore Recipes</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', alignItems: 'center', gap: '1rem' }}>
          <div className="navbar-search" style={{ marginTop: 0, marginBottom: 0 }}>
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: 220 }}
            />
          </div>
          <FaHeart style={{ color: '#c53030', fontSize: '1.7rem', cursor: 'pointer' }} title="Favorites" />
        </div>
        <div className="filter-box">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn${selectedFilter === filter ? " active" : ""}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="recipes-grid">
          {filteredRecipes.map((recipe, idx) => (
            <div className="recipe-card" key={idx}>
              <img src={recipe.image} alt={recipe.name} className="recipe-img" />
              <div className="recipe-info">
                <h2>{recipe.name}</h2>
                <p>{recipe.nutrition}</p>
                <span className={`type-label ${recipe.type === "Veg" ? "veg" : "non-veg"}`}>{recipe.type}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ExploreRecipes;
