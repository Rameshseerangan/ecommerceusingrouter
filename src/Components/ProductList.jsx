import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button  onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
