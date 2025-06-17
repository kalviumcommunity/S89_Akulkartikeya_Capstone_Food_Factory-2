import React from 'react';
import './shopping.css';
import { useShop } from './ShopContext';

function Wishlist() {
  const { wishlist, removeFromWishlist } = useShop();
  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {wishlist.map((item, idx) => (
            <li key={item.id + '-' + idx} className="product-card" style={{ margin: '1rem 0' }}>
              <img src={item.image} alt={item.name} className="product-img" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
