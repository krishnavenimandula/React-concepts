import React, { useContext } from "react";
import CartContext from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cart;
