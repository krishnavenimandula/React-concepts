import React, { createContext, useState } from "react";

// create Cart context

const CartContext = createContext();

//create Provider for the cart

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevcart) => [...prevcart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevcart) => prevcart.filter((item) => item.id !== itemId));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

//custom hook to use the cart
