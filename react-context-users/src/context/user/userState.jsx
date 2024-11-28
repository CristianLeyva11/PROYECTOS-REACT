import { useReducer, createContext } from "react";
import axios from "axios";
import userReducer from "./userReducer";
import { UserActionTypes } from "./userTypes";
import { toast } from "sonner";

const UserContext = createContext({});
const UserStateProvider = ({ children }) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    dispatch({ type: UserActionTypes.GET_USERS, payload: res.data.data });
    return res.data.data;
  };

  const getUser = async (id) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({ type: UserActionTypes.GET_USER, payload: res.data.data });
    return res.data.data;
  };

  const postUser = async ({ name, job }) => {
    const res = await axios.post("https://reqres.in/api/users", { name, job });
    dispatch({ type: UserActionTypes.POST_USER, payload: res.data });
    return res.data;
  };

  const putUser = async ({ name, job, id }) => {
    const res = await axios.put(`https://reqres.in/api/users/${id}`, { name, job });
    dispatch({ type: UserActionTypes.PUT_USER, payload: res.data });
    return res.data;
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`https://reqres.in/api/users/${id}`);
    if (res.status === 204) {
      alert(res.status);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, getUsers, getUser, postUser, putUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserStateProvider;
