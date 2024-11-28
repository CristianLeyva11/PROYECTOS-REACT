
import { Link } from 'react-router-dom';

const MenuPage = () => (
  <div className='menu'>
    <div className='menu-contenido'>
      <h1>LISTADOS DE USUARIOS</h1>
      <nav>
        <Link to="/userList">Lista de Usuarios</Link>
        <br />
        <Link to="/login">Login</Link>
      </nav>
    </div>
  </div>
);

export default MenuPage;
