import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      state.currentUser = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, loginUser, logoutUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
