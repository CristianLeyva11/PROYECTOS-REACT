
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/Store/userSlice';

const UserList = () => {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className='listado'>
      <div className='listado-contenido'>
      <h1>Lista de Usuarios</h1>
      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id} className='opcion'>
              <p>Nombre: <strong>{user.name}</strong> </p> 
              <p>Usuario: <strong>{user.username}</strong></p> 
              <button onClick={() => handleDelete(user.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
      <div className='boton'>
      <Link to="/userForm">Agregar Usuario</Link>
      </div>
      </div>
    </div>
  );
};

export default UserList;
