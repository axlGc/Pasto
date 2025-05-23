import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer02() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-1">© 2025 La Tierra de los Pastos. Todos los derechos reservados.</p>
        <p className="mb-0">
          <a href="https://www.facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer02;
