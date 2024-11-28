import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../Redux/Store/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editingUser = location.state?.user;

  const [name, setName] = useState(editingUser?.name || '');
  const [username, setUsername] = useState(editingUser?.username || '');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (editingUser) {
      dispatch(updateUser({ id: editingUser.id, name, username, password }));
    } else {
      dispatch(addUser({ id: Date.now(), name, username, password }));
    }
    navigate('/userList');
  };

  return (
    <div className='formulario'>
      <div>
        <h1>{editingUser ? 'Editar Usuario' : 'Agregar Usuario'}</h1>
        <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>{editingUser ? 'Actualizar' : 'Agregar'}</button>
      </div>
    </div>
  );
};

export default UserForm;
