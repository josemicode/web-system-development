import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🎵 Music Center
      </div>
      <ul className="navbar-links">
        <li><a href="#">Canciones</a></li>
        <li><a href="#">Álbumes</a></li>
        <li><a href="#">Artistas</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;