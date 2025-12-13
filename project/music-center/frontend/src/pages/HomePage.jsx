import { Link } from 'react-router-dom';
import './HomePage.css';

const albumCovers = [
  "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",
  "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
  "https://imgs.search.brave.com/Nv6Fc8J0NncyF6zL4Y5Ix1VZp1J79wngnqZFfdde3nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aGl0/ZW5vaXNlcmVjb3Jk/cy5vcmcvY2RuL3No/b3AvcHJvZHVjdHMv/Y2FzaW9wZWEtY2Fz/aW9wZWFfODAweC5q/cGc_dj0xNjI3NDYw/MTE5",
  "https://imgs.search.brave.com/GqBnU_sAgd8ueDhfbU6HXb_ptALIt9EeE85FPudTtOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vdXNlLW1l/ZGlhLzg5NzA3L3Vw/dG8tNzAweGF1dG8v/NWNmYmM0ZTAvMS9q/cGVnL1ZHLUFDLTAx/MTAtQS5qcGVn",
  "https://i.ebayimg.com/images/g/iekAAOSwotJeKjWW/s-l1600.webp",
  "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png",
];

const midPoint = Math.ceil(albumCovers.length / 2);
const leftAlbums = albumCovers.slice(0, midPoint);
const rightAlbums = albumCovers.slice(midPoint);

function HomePage() {
  return (
    <div className="home-tunnel-container">
      
      {/* PARED IZQUIERDA */}
      <div className="side-wall left-wall">
        <div className="wall-track sliding-up">
          {leftAlbums.map((src, index) => (
            <img key={`left-${index}`} src={src} className="wall-album" alt="Album cover" />
          ))}
          {/* Duplicado para loop */}
          {leftAlbums.map((src, index) => (
            <img key={`left-dup-${index}`} src={src} className="wall-album" alt="Album cover" />
          ))}
        </div>
      </div>

      {/* --- CENTRO: TARJETA DE CRISTAL --- */}
      <div className="center-stage">
        <div className="glass-card">
          <h1 className="hero-title">
            Music <span className="title-accent">Center</span>
          </h1>
          <p className="hero-subtitle">
            The Open Music Library. <br /> Share. Discover. Enjoy 
          </p>
          
          {/* 1. BOTÓN PRIMERO */}
          <Link to="/artists" className="play-button">
            Entrar al Estudio ▶
          </Link>

          <div className="authors-badge">
            <small>By:</small><br />
            Jose Miguel Ojeda & Jose Maria Garcia
          </div>

        </div>
      </div>

      {/* PARED DERECHA */}
      <div className="side-wall right-wall">
         <div className="wall-track sliding-down">
          {rightAlbums.map((src, index) => (
            <img key={`right-${index}`} src={src} className="wall-album" alt="Album cover" />
          ))}
          {/* Duplicado para loop */}
          {rightAlbums.map((src, index) => (
            <img key={`right-dup-${index}`} src={src} className="wall-album" alt="Album cover" />
          ))}
        </div>
      </div>

    </div>
  );
}

export default HomePage;