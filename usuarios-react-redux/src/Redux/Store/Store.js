import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Recupera el estado de localStorage
const persistedState = JSON.parse(localStorage.getItem("reduxState")) || {};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: persistedState,
});

// localStorage
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
