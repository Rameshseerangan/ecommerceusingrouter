import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartItems }) => {
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">RS-Store</Link>
      </div>
      <div className="cart">
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </header>
  );
};

export default Header;
