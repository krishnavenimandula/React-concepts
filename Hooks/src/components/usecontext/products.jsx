import React, { useContext } from "react";
import CartContext from "./CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 0.8 },
  ];
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - {product.price}
          </span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
