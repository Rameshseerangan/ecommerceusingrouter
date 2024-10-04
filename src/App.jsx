import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
import CartPage from './Components/Cart';
import Header from './Components/Header';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
