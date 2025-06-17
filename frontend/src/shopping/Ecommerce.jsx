import React, { useState } from 'react';
import './shopping.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useShop } from './ShopContext';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="navbar-item home" onClick={() => navigate('/recipes')}>Home</span>
      </div>
      <span className="navbar-item" onClick={() => navigate('/explore-recipes')}>Explore Recipes</span>
      <span className="navbar-item" onClick={() => navigate('/cooki-ai')}>COOKI(ai)</span>
      <span className="navbar-item" onClick={() => navigate('/shop')} style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Shopping and Grocery</span>
      <span className="navbar-item doctor" onClick={() => navigate('/doctor')}>Doctor</span>
    </nav>
  );
};

const categories = [
  { name: 'Grocery', key: 'grocery' },
  { name: 'Vegetables & Fruits', key: 'vegfruits' },
  { name: 'Recipes', key: 'recipes' },
  { name: 'Gym Equipment', key: 'gym' },
];

const products = {
  grocery: [
    { id: 1, name: 'Rice', price: 50, image: 'https://img.icons8.com/color/96/rice-bowl.png' },
    { id: 2, name: 'Wheat Flour', price: 40, image: 'https://img.icons8.com/color/96/wheat.png' },
    { id: 3, name: 'Pulses', price: 60, image: 'https://img.icons8.com/color/96/beans.png' },
    { id: 11, name: 'Cooking Oil', price: 120, image: 'https://img.icons8.com/color/96/oil-bottle.png' },
    { id: 12, name: 'Sugar', price: 35, image: 'https://img.icons8.com/color/96/sugar-cubes.png' },
    { id: 13, name: 'Salt', price: 20, image: 'https://img.icons8.com/color/96/salt.png' },
    { id: 24, name: 'Tea', price: 60, image: 'https://img.icons8.com/color/96/tea.png' },
    { id: 25, name: 'Coffee', price: 90, image: 'https://img.icons8.com/color/96/coffee.png' },
    { id: 26, name: 'Bread', price: 30, image: 'https://img.icons8.com/color/96/bread.png' },
    { id: 27, name: 'Butter', price: 80, image: 'https://img.icons8.com/color/96/butter.png' },
    { id: 28, name: 'Milk', price: 50, image: 'https://img.icons8.com/color/96/milk-bottle.png' },
    { id: 29, name: 'Paneer', price: 120, image: 'https://img.icons8.com/color/96/cheese.png' },
    { id: 30, name: 'Cornflakes', price: 70, image: 'https://img.icons8.com/color/96/corn.png' },
    { id: 31, name: 'Oats', price: 60, image: 'https://img.icons8.com/color/96/oatmeal.png' },
    { id: 32, name: 'Honey', price: 110, image: 'https://img.icons8.com/color/96/honey.png' },
    { id: 33, name: 'Jam', price: 60, image: 'https://img.icons8.com/color/96/jam.png' },
    { id: 34, name: 'Pickle', price: 40, image: 'https://img.icons8.com/color/96/pickle.png' },
    { id: 35, name: 'Biscuits', price: 30, image: 'https://img.icons8.com/color/96/biscuit.png' },
    { id: 36, name: 'Chips', price: 25, image: 'https://img.icons8.com/color/96/chips.png' },
    { id: 37, name: 'Noodles', price: 45, image: 'https://img.icons8.com/color/96/noodles.png' },
    { id: 38, name: 'Pasta', price: 55, image: 'https://img.icons8.com/color/96/pasta.png' },
    { id: 39, name: 'Soup', price: 40, image: 'https://img.icons8.com/color/96/soup-plate.png' },
    { id: 40, name: 'Cereal', price: 65, image: 'https://img.icons8.com/color/96/cereal.png' },
    { id: 41, name: 'Green Tea', price: 70, image: 'https://img.icons8.com/color/96/green-tea.png' },
    { id: 42, name: 'Muesli', price: 80, image: 'https://img.icons8.com/color/96/muesli.png' },
    { id: 43, name: 'Dry Fruits', price: 200, image: 'https://img.icons8.com/color/96/dried-fruit.png' },
    { id: 44, name: 'Peanut Butter', price: 150, image: 'https://img.icons8.com/color/96/peanut-butter.png' },
  ],
  vegfruits: [
    { id: 4, name: 'Apple', price: 30, image: 'https://img.icons8.com/color/96/apple.png' },
    { id: 5, name: 'Tomato', price: 20, image: 'https://img.icons8.com/color/96/tomato.png' },
    { id: 6, name: 'Spinach', price: 15, image: 'https://img.icons8.com/color/96/spinach.png' },
    { id: 14, name: 'Banana', price: 25, image: 'https://img.icons8.com/color/96/banana.png' },
    { id: 15, name: 'Orange', price: 28, image: 'https://img.icons8.com/color/96/orange.png' },
    { id: 16, name: 'Potato', price: 18, image: 'https://img.icons8.com/color/96/potato.png' },
    { id: 45, name: 'Grapes', price: 35, image: 'https://img.icons8.com/color/96/grapes.png' },
    { id: 46, name: 'Mango', price: 50, image: 'https://img.icons8.com/color/96/mango.png' },
    { id: 47, name: 'Pineapple', price: 60, image: 'https://img.icons8.com/color/96/pineapple.png' },
    { id: 48, name: 'Carrot', price: 22, image: 'https://img.icons8.com/color/96/carrot.png' },
    { id: 49, name: 'Cucumber', price: 18, image: 'https://img.icons8.com/color/96/cucumber.png' },
    { id: 50, name: 'Broccoli', price: 40, image: 'https://img.icons8.com/color/96/broccoli.png' },
    { id: 51, name: 'Lettuce', price: 28, image: 'https://img.icons8.com/color/96/lettuce.png' },
    { id: 52, name: 'Strawberry', price: 55, image: 'https://img.icons8.com/color/96/strawberry.png' },
    { id: 53, name: 'Blueberry', price: 70, image: 'https://img.icons8.com/color/96/blueberry.png' },
    { id: 54, name: 'Papaya', price: 32, image: 'https://img.icons8.com/color/96/papaya.png' },
    { id: 55, name: 'Guava', price: 27, image: 'https://img.icons8.com/color/96/guava.png' },
    { id: 56, name: 'Peach', price: 38, image: 'https://img.icons8.com/color/96/peach.png' },
    { id: 57, name: 'Pear', price: 36, image: 'https://img.icons8.com/color/96/pear.png' },
    { id: 58, name: 'Watermelon', price: 60, image: 'https://img.icons8.com/color/96/watermelon.png' },
    { id: 59, name: 'Chili', price: 12, image: 'https://img.icons8.com/color/96/chili-pepper.png' },
    { id: 60, name: 'Onion', price: 20, image: 'https://img.icons8.com/color/96/onion.png' },
    { id: 61, name: 'Garlic', price: 18, image: 'https://img.icons8.com/color/96/garlic.png' },
    { id: 62, name: 'Pumpkin', price: 30, image: 'https://img.icons8.com/color/96/pumpkin.png' },
    { id: 63, name: 'Beetroot', price: 25, image: 'https://img.icons8.com/color/96/beet.png' },
    { id: 64, name: 'Radish', price: 15, image: 'https://img.icons8.com/color/96/radish.png' },
    { id: 65, name: 'Cabbage', price: 22, image: 'https://img.icons8.com/color/96/cabbage.png' },
    { id: 66, name: 'Brinjal', price: 20, image: 'https://img.icons8.com/color/96/eggplant.png' },
    { id: 67, name: 'Lemon', price: 10, image: 'https://img.icons8.com/color/96/lemon.png' },
    { id: 68, name: 'Kiwi', price: 45, image: 'https://img.icons8.com/color/96/kiwi.png' },
    { id: 69, name: 'Avocado', price: 80, image: 'https://img.icons8.com/color/96/avocado.png' },
  ],
  recipes: [
    { id: 7, name: 'Paneer Butter Masala Kit', price: 120, image: 'https://img.icons8.com/color/96/cheese.png' },
    { id: 8, name: 'Chicken Curry Kit', price: 150, image: 'https://img.icons8.com/color/96/chicken.png' },
    { id: 17, name: 'Veg Biryani Kit', price: 110, image: 'https://img.icons8.com/color/96/biryani.png' },
    { id: 18, name: 'Brownie Mix', price: 90, image: 'https://img.icons8.com/color/96/brownie.png' },
    { id: 19, name: 'Salad Kit', price: 70, image: 'https://img.icons8.com/color/96/salad.png' },
    { id: 70, name: 'Pasta Kit', price: 100, image: 'https://img.icons8.com/color/96/pasta.png' },
    { id: 71, name: 'Pizza Kit', price: 130, image: 'https://img.icons8.com/color/96/pizza.png' },
    { id: 72, name: 'Soup Kit', price: 80, image: 'https://img.icons8.com/color/96/soup-plate.png' },
    { id: 73, name: 'Sandwich Kit', price: 90, image: 'https://img.icons8.com/color/96/sandwich.png' },
    { id: 74, name: 'Burger Kit', price: 120, image: 'https://img.icons8.com/color/96/hamburger.png' },
    { id: 75, name: 'Sushi Kit', price: 200, image: 'https://img.icons8.com/color/96/sushi.png' },
    { id: 76, name: 'Taco Kit', price: 110, image: 'https://img.icons8.com/color/96/taco.png' },
    { id: 77, name: 'Dosa Kit', price: 90, image: 'https://img.icons8.com/color/96/dosa.png' },
    { id: 78, name: 'Idli Kit', price: 85, image: 'https://img.icons8.com/color/96/idli.png' },
    { id: 79, name: 'Pancake Mix', price: 95, image: 'https://img.icons8.com/color/96/pancake.png' },
    { id: 80, name: 'Falafel Kit', price: 110, image: 'https://img.icons8.com/color/96/falafel.png' },
    { id: 81, name: 'Kebab Kit', price: 140, image: 'https://img.icons8.com/color/96/kebab.png' },
    { id: 82, name: 'Noodle Kit', price: 100, image: 'https://img.icons8.com/color/96/noodles.png' },
    { id: 83, name: 'Curry Kit', price: 120, image: 'https://img.icons8.com/color/96/curry.png' },
    { id: 84, name: 'Dal Kit', price: 80, image: 'https://img.icons8.com/color/96/dal.png' },
    { id: 85, name: 'Chole Kit', price: 90, image: 'https://img.icons8.com/color/96/chole.png' },
    { id: 86, name: 'Rajma Kit', price: 95, image: 'https://img.icons8.com/color/96/rajma.png' },
    { id: 87, name: 'Sambar Kit', price: 85, image: 'https://img.icons8.com/color/96/sambar.png' },
    { id: 88, name: 'Upma Kit', price: 80, image: 'https://img.icons8.com/color/96/upma.png' },
    { id: 89, name: 'Poha Kit', price: 75, image: 'https://img.icons8.com/color/96/poha.png' },
    { id: 90, name: 'Cutlet Kit', price: 100, image: 'https://img.icons8.com/color/96/cutlet.png' },
    { id: 91, name: 'Manchurian Kit', price: 110, image: 'https://img.icons8.com/color/96/manchurian.png' },
    { id: 92, name: 'Spring Roll Kit', price: 120, image: 'https://img.icons8.com/color/96/spring-roll.png' },
    { id: 93, name: 'Gulab Jamun Mix', price: 90, image: 'https://img.icons8.com/color/96/gulab-jamun.png' },
    { id: 94, name: 'Halwa Mix', price: 85, image: 'https://img.icons8.com/color/96/halwa.png' },
  ],
  gym: [
    { id: 9, name: 'Dumbbells', price: 500, image: 'https://img.icons8.com/color/96/dumbbell.png' },
    { id: 10, name: 'Yoga Mat', price: 300, image: 'https://img.icons8.com/color/96/yoga-mat.png' },
    { id: 20, name: 'Treadmill', price: 12000, image: 'https://img.icons8.com/color/96/treadmill.png' },
    { id: 21, name: 'Skipping Rope', price: 150, image: 'https://img.icons8.com/color/96/jump-rope.png' },
    { id: 22, name: 'Kettlebell', price: 700, image: 'https://img.icons8.com/color/96/kettlebell.png' },
    { id: 23, name: 'Resistance Bands', price: 250, image: 'https://img.icons8.com/color/96/resistance-band.png' },
    { id: 95, name: 'Pull-up Bar', price: 1200, image: 'https://img.icons8.com/color/96/pull-up-bar.png' },
    { id: 96, name: 'Bench Press', price: 3500, image: 'https://img.icons8.com/color/96/bench-press.png' },
    { id: 97, name: 'Exercise Bike', price: 8000, image: 'https://img.icons8.com/color/96/exercise-bike.png' },
    { id: 98, name: 'Rowing Machine', price: 9000, image: 'https://img.icons8.com/color/96/rowing-machine.png' },
    { id: 99, name: 'Stepper', price: 2500, image: 'https://img.icons8.com/color/96/stepper.png' },
    { id: 100, name: 'Medicine Ball', price: 600, image: 'https://img.icons8.com/color/96/medicine-ball.png' },
    { id: 101, name: 'Foam Roller', price: 400, image: 'https://img.icons8.com/color/96/foam-roller.png' },
    { id: 102, name: 'Wrist Weights', price: 350, image: 'https://img.icons8.com/color/96/wrist-weights.png' },
    { id: 103, name: 'Ankle Weights', price: 370, image: 'https://img.icons8.com/color/96/ankle-weights.png' },
    { id: 104, name: 'Push-up Bars', price: 300, image: 'https://img.icons8.com/color/96/push-up-bar.png' },
    { id: 105, name: 'Gym Gloves', price: 250, image: 'https://img.icons8.com/color/96/gym-gloves.png' },
    { id: 106, name: 'Ab Roller', price: 450, image: 'https://img.icons8.com/color/96/ab-roller.png' },
    { id: 107, name: 'Power Rack', price: 7000, image: 'https://img.icons8.com/color/96/power-rack.png' },
    { id: 108, name: 'Barbell', price: 1200, image: 'https://img.icons8.com/color/96/barbell.png' },
    { id: 109, name: 'Weight Plates', price: 900, image: 'https://img.icons8.com/color/96/weight-plate.png' },
    { id: 110, name: 'Gym Bag', price: 600, image: 'https://img.icons8.com/color/96/gym-bag.png' },
    { id: 111, name: 'Water Bottle', price: 120, image: 'https://img.icons8.com/color/96/water-bottle.png' },
    { id: 112, name: 'Sweatband', price: 80, image: 'https://img.icons8.com/color/96/sweatband.png' },
    { id: 113, name: 'Jump Box', price: 2000, image: 'https://img.icons8.com/color/96/jump-box.png' },
    { id: 114, name: 'Battle Rope', price: 900, image: 'https://img.icons8.com/color/96/battle-rope.png' },
    { id: 115, name: 'Agility Ladder', price: 350, image: 'https://img.icons8.com/color/96/agility-ladder.png' },
    { id: 116, name: 'Speed Parachute', price: 500, image: 'https://img.icons8.com/color/96/speed-parachute.png' },
    { id: 117, name: 'Gym Timer', price: 700, image: 'https://img.icons8.com/color/96/timer.png' },
    { id: 118, name: 'Yoga Block', price: 200, image: 'https://img.icons8.com/color/96/yoga-block.png' },
  ],
};

function Ecommerce() {
  const [selectedCategory, setSelectedCategory] = useState('grocery');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { cart, wishlist, addToCart, addToWishlist, buyNow } = useShop();

  const getBorderClass = (cat) => {
    if (cat === 'grocery') return 'grocery-border';
    if (cat === 'vegfruits') return 'vegfruits-border';
    if (cat === 'recipes') return 'recipes-border';
    if (cat === 'gym') return 'gym-border';
    return '';
  };

  // Filter products by search
  const filteredProducts = products[selectedCategory].filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ecommerce-container">
      <Navbar />
      <div className="shop-search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="shop-search-input"
        />
        <FaSearch className="shop-search-icon" />
        <Link to="/cart" className="shop-icon-link"><FaShoppingCart /></Link>
        <Link to="/wishlist" className="shop-icon-link"><FaHeart /></Link>
      </div>
      <h1 className="shop-title">Shopping and Grocery</h1>
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={selectedCategory === cat.key ? 'active' : ''}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="products-list shop-products-list">
        {filteredProducts.map((item) => (
          <div className={`product-card ${getBorderClass(selectedCategory)}`} key={item.id}>
            <img src={item.image} alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => addToWishlist(item)}>Wishlist</button>
            <button onClick={() => { buyNow(item); navigate('/buy-now'); }}>Buy Now</button>
          </div>
        ))}
      </div>
      <div className="cart-wishlist-links">
        <Link to="/cart">Go to Cart ({cart.length})</Link>
        <Link to="/wishlist">Go to Wishlist ({wishlist.length})</Link>
      </div>
    </div>
  );
}

export default Ecommerce;
