import React from 'react';
import './shopping.css';
import { useShop } from './ShopContext';

function Cart() {
  const { cart, removeFromCart } = useShop();
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item, idx) => (
            <li key={item.id + '-' + idx} className="product-card" style={{ margin: '1rem 0' }}>
              <img src={item.image} alt={item.name} className="product-img" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
