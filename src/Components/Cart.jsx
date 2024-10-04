import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalPrice = totalPrice * 0.9;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <div>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <h3>Final Price (with 10% discount): ${finalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
