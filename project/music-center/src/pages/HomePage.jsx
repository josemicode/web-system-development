import { Link } from 'react-router-dom'; 
import TrackList from '../components/TrackList';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      
      {/* SECCIÓN CANCIONES */}
      <section className="section-block">
        <div className="section-header">
          <h2>🎵 Canciones Disponibles</h2>
          <Link to="/add-track" className="add-btn">
            + Añadir Canción
          </Link>
        </div>
        <TrackList />
      </section>

      {/* SECCIÓN ÁLBUMES (Placeholder) */}
      <section className="section-block">
        <div className="section-header">
          <h2>💿 Álbumes Disponibles</h2>
          <button className="add-btn" disabled>+ Añadir Álbum (Soon jeje)</button>
        </div>
        <p>No hay álbumes todavía...</p>
      </section>

      {/* SECCIÓN ARTISTAS (Placeholder) */}
      <section className="section-block">
        <div className="section-header">
          <h2>🎤 Artistas Disponibles</h2>
          <button className="add-btn" disabled>+ Añadir Artista (Soon jeje)</button>
        </div>
        <p>No hay artistas todavía...</p>
      </section>

    </div>
  );
}

export default HomePage;