import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">🎵 Music Center</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Songs</a></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/artists">Artists</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;