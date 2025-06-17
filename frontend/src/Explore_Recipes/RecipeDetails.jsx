import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Explore_Recipes/ExploreRecipes.css";

function RecipeDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate(-1)} style={{ marginTop: 20 }}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ background: '#FFF1DC', minHeight: '100vh' }}>
      <div className="navbar">
        <span className="navbar-item home" onClick={() => navigate('/recipes')} style={{ cursor: 'pointer' }}>Home</span>
        <span className="navbar-item" onClick={() => navigate('/explore-recipes')} style={{ cursor: 'pointer' }}>Explore Recipes</span>
      </div>
      <div style={{ maxWidth: 700, margin: '2rem auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem' }}>
        <img src={recipe.image} alt={recipe.name} style={{ width: '100%', borderRadius: 12, marginBottom: 24, maxHeight: 320, objectFit: 'cover' }} />
        <h1 style={{ fontSize: '2.2rem', marginBottom: 8 }}>{recipe.name}</h1>
        <span className={`type-label ${recipe.type === "Veg" ? "veg" : "non-veg"}`}>{recipe.type}</span>
        <p style={{ margin: '1rem 0', fontWeight: 500 }}>{recipe.nutrition}</p>
        <h3>Preparation Time:</h3>
        <p>{recipe.time || "30 minutes"}</p>
        <h3>Ingredients:</h3>
        <ul style={{ marginLeft: 20, marginBottom: 20 }}>
          {(recipe.ingredients || []).map((ingredient, idx) => (
            <li key={idx} style={{ marginBottom: 6 }}>{ingredient}</li>
          ))}
        </ul>
        <h3>How to Make:</h3>
        <ol style={{ marginLeft: 20 }}>
          {(recipe.steps || [
            "Step 1: Gather all ingredients.",
            "Step 2: Follow the standard recipe steps for this dish.",
            "Step 3: Serve and enjoy!"
          ]).map((step, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>{step}</li>
          ))}
        </ol>
        <button onClick={() => navigate(-1)} style={{ marginTop: 24, padding: '0.5rem 1.5rem', borderRadius: 8, border: 'none', background: '#4d3c1a', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Back</button>
      </div>
    </div>
  );
}

export default RecipeDetails;
