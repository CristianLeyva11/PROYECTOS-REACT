import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AddUser } from './components/AddUser.jsx';
import { Login } from './components/Login.jsx';
import { Profile } from './components/Profile.jsx';
import { UserList } from './components/UserList.jsx';

function App() {
  const loggedInUser = useSelector(state => state.loggedInUser);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <div className="home">
              <button onClick={() => window.location.href = '/UserList'}>Listado de Alumnos</button>
              <button onClick={() => window.location.href = '/login'}>Login</button>
            </div>
          } />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={loggedInUser ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
