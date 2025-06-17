import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaHeart, FaStore } from 'react-icons/fa';
import './shopping.css';

const navLinks = [
  { to: '/shop', label: 'Shop', icon: <FaStore /> },
  { to: '/cart', label: 'Cart', icon: <FaShoppingCart /> },
  { to: '/wishlist', label: 'Wishlist', icon: <FaHeart /> },
  { to: '/doctor', label: 'Doctor', icon: <FaHome /> },
  { to: '/', label: 'Home', icon: <FaHome /> },
];

function ShopNavbar() {
  const location = useLocation();
  return (
    <nav className="shop-navbar">
      {navLinks.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={`shop-nav-link${location.pathname === link.to ? ' active' : ''}`}
        >
          {link.icon}
          <span style={{ marginLeft: 6 }}>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default ShopNavbar;
