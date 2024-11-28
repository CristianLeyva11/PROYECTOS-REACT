
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/Store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
    navigate('/profile');
  };

  return (
    <div className='formulario'>
      <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
