import React, { useState } from 'react';
import { useShop } from './ShopContext';
import './shopping.css';

function BuyNowPage() {
  const { buyNowItem, clearBuyNow } = useShop();
  const [address, setAddress] = useState({ name: '', phone: '', address: '', pincode: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!buyNowItem) {
    return <div className="cart-container"><h2>No product selected for Buy Now.</h2></div>;
  }

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearBuyNow();
  };

  if (orderPlaced) {
    return (
      <div className="cart-container">
        <h2>Order Placed!</h2>
        <p>Thank you for shopping with us.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Buy Now</h2>
      <div className="product-card" style={{ margin: 'auto' }}>
        <img src={buyNowItem.image} alt={buyNowItem.name} className="product-img" />
        <h3>{buyNowItem.name}</h3>
        <p>{buyNowItem.description}</p>
        <p><b>Price:</b> ₹{buyNowItem.price}</p>
      </div>
      <form onSubmit={handleOrder} style={{ marginTop: '2rem' }}>
        <h3>Delivery Address</h3>
        <input name="name" placeholder="Full Name" value={address.name} onChange={handleChange} required className="shop-search-input" style={{ marginBottom: '1rem' }} /><br />
        <input name="phone" placeholder="Phone Number" value={address.phone} onChange={handleChange} required className="shop-search-input" style={{ marginBottom: '1rem' }} /><br />
        <input name="address" placeholder="Address" value={address.address} onChange={handleChange} required className="shop-search-input" style={{ marginBottom: '1rem' }} /><br />
        <input name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleChange} required className="shop-search-input" style={{ marginBottom: '1rem' }} /><br />
        <button type="submit" className="product-card button">Place Order</button>
      </form>
    </div>
  );
}

export default BuyNowPage;
