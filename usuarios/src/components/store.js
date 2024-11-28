import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// Estado inicial
const initialState = {
  users: [],
  loggedInUser: null,
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, { ...action.payload, id: uuidv4() }] };
    case 'DELETE_USER':
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.id ? action.payload : user),
      };
    case 'LOGIN_USER':
      return { ...state, loggedInUser: action.payload };
    case 'LOGOUT_USER':
      return { ...state, loggedInUser: null };
    default:
      return state;
  }
};

// Crear el store
const store = createStore(userReducer);

export default store;
