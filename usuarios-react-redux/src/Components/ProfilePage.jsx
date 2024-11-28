
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/Store/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div className='perfil'>
      <div>

      <h1>Perfil</h1>
      {currentUser ? (
        <>
          <p>BIENVENIDOOOO</p>
          <p>NOMBRE: <strong>{currentUser.name}</strong></p>
          <p>USUARIO: <strong>{currentUser.username}</strong> </p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
      ) : (
        <p>No estás autenticado.</p>
      )}
      </div>
    </div>
  );
};

export default ProfilePage;
