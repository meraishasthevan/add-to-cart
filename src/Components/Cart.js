import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart ,clearCart} from '../Redux/actions';  
import './Cart.css';
import Navbar from './Navbar';

const Cart = () => {
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    console.log("Checkout details:", userDetails);
    setUserDetails({ name: '', email: '' });
    alert('Purchase completed!');
    dispatch(clearCart());
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navbar />
      <div className="Cart">
        <header>
          <h1>Your Cart</h1>
        </header>
        <main>
          <div className="cart-container">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
               <div>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <div className="cart-item-img">        
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div>
                        <div className="cart-item-title">{item.title}</div>
                        <div className="cart-item-author">by {item.author}</div>
                        <div className="cart-item-price">${item.price.toFixed(2)}</div>
                        <div className='cart-item-desc'>{item.description}</div>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)} className="remove-from-cart">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="cart-summary">
              <div className="total-price">Total Price: <span>${totalPrice.toFixed(2)}</span></div>
              <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
                <h2>Enter Your Details</h2>
                <label>
                  Name:
                  <input type="text" name="name" value={userDetails.name} onChange={handleChange} required className="name" />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={userDetails.email} onChange={handleChange} required className="email" />
                </label>
                <button type="button" onClick={handleCheckout} className="checkout-button">
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
