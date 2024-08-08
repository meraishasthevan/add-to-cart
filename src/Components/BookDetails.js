import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../Redux/actions';
import './BookDetails.css';
import Navbar from './Navbar';

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(book));
    navigate('/');
  };

  return (
    <div> 
      <Navbar /> 
      <div className="book-details">
        <img src={book.img} alt={book.title} />
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>
        <p>${book.price.toFixed(2)}</p>
        <p>{book.description}</p>
        <button onClick={handleAddToCart} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
