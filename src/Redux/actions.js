// actions.js
export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  payload: books,
});

export const addToCart = (book) => ({
  type: 'ADD_TO_CART',
  payload: book,
});

export const removeFromCart = (bookId) => ({
  type: 'REMOVE_FROM_CART',
  payload: bookId,
});
export const CLEAR_CART = 'CLEAR_CART';

export const clearCart = () => ({
  type: CLEAR_CART,
});

