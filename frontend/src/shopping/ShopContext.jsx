import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const addToWishlist = (item) => {
    setWishlist((prev) => [...prev, item]);
  };
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  const buyNow = (item) => {
    setBuyNowItem(item);
  };
  const clearBuyNow = () => setBuyNowItem(null);

  return (
    <ShopContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist, buyNow, buyNowItem, clearBuyNow }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
