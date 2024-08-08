// reducer.js
import { CLEAR_CART } from './actions';
const initialState = {
  books: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        books: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(book => book.id !== action.payload),
      };
      case CLEAR_CART:
        return {
          ...state,
          cart: [],
        };
    default:
      return state;
  }
};

export default reducer;
