import { Link } from 'react-router-dom';
import { useAuth } from '../feactures/auth/AuthContext';
import '../assets/style/navbar01.css';

function Navbar01 (){
  const { user, logout } = useAuth(); // Obtén también logout

  console.log('Usuario en Navbar:', user);

  return(
    <nav className="navbar navbar-expand-lg navbar-light" style={{
      background:'white',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'black',
    }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <Link className="nav-link" to="/">Inicio</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-pasto">Sobre Pasto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-carnaval">Sobre el Carnaval</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carnival-days">¿Que hacer?</Link>
            </li>
            {!user && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">login</Link>
              </li>
            )}
            {user?.rol === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard-coordinador">
                  Deshboard
                </Link>
              </li>
            )}

            {user && (
  <li className="nav-item">
    <span className="nav-link" style={{ color: 'black', fontWeight: 'bold' }}>
      Rol: {user.role || user.rol || user.user?.rol}
    </span>
  </li>
)}




            {user && (
              <li className="nav-item">
                <button className="nav-link btn btn-link" style={{color: 'black'}} onClick={logout}>
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar01;