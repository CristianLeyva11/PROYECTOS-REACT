import { UserActionTypes } from "./userTypes";

const userReducer = (state, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      return { ...state, users: action.payload };
    case UserActionTypes.GET_USER:
      return { ...state, selectedUser: action.payload };
    case UserActionTypes.POST_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UserActionTypes.PUT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default userReducer;
