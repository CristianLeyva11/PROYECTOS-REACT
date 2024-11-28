import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: 'ADD_USER', payload: { name, username, password } });
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Agregar Usuario</h2>
      <input placeholder="Nombre" onChange={e => setName(e.target.value)} />
      <input placeholder="Usuario" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleAdd}>Guardar</button>
    </div>
  );
};
