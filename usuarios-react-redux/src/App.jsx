
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuPage from './Components/MenuPage';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import LoginPage from './Components/LoginPage';
import ProfilePage from './Components/ProfilePage';

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  return currentUser ? children : <Navigate to="/login" />;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path='/*' element={<LoginPage/>}/>
      <Route path="/userList" element={<UserList />} />
      <Route path="/userForm" element={<UserForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;
