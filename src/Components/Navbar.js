import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookIcon from '@mui/icons-material/Book';

import './Navbar.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Bookstore<span><BookIcon style={{fontSize:"25px",marginLeft:"15px"}}/></span></h1>
      
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <div className="navbar-cart">
          <Link to="/cart" className="navbar-link">
            <i className="bi bi-cart-fill"></i>         
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
