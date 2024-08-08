import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBooks } from '../Redux/actions';
import Navbar from './Navbar';
import './Home.css';
import booksData from '../books.json';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(setBooks(booksData));
  }, [dispatch]);

  const handleViewDetails = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="Home">
      <Navbar />
      <header>
        <h1>Bookstore</h1>
      </header>
      <main>
        <div className="books-container">
          {books.map((book) => (
            <div key={book.id} className="book">
              <div className="book-info">
                <img src={book.img} alt={book.title} className="book-img" />
                <div className="book-title">{book.title}</div>
                <div className="book-author">by {book.author}</div>
                <div className="book-price">${book.price.toFixed(2)}</div>
                <div className="book-description">{book.description}</div>
              </div>
              <button className="view-details" onClick={() => handleViewDetails(book.id)}>
                Show Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
