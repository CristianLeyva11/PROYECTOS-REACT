import { useSelector, useDispatch } from 'react-redux';

export const UserList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  return (
    <div>
      <h2>Listado de Usuarios</h2>
      <button onClick={() => window.location.href = '/AddUser'}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.username})
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
