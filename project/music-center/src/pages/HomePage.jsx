import { Link } from 'react-router-dom';
import TrackList from '../components/TrackList';
import AlbumList from '../components/AlbumList';
import ArtistList from '../components/ArtistList';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      
      {/* SECCIÓN CANCIONES */}
      <section className="section-block">
        <div className="section-header">
          <h2>🎵 Canciones Disponibles</h2>
          <Link to="/add-track" className="add-btn">+ Añadir Canción</Link>
        </div>
        <TrackList />
      </section>

      {/* SECCIÓN ÁLBUMES*/}
      <section className="section-block">
        <div className="section-header">
          <h2>💿 Álbumes Disponibles</h2>
          <Link to="/add-album" className="add-btn">+ Añadir Álbum</Link>
        </div>
        <AlbumList />
      </section>

      {/* SECCIÓN ARTISTAS*/}
      <section className="section-block">
        <div className="section-header">
          <h2>🎤 Artistas Disponibles</h2>
          <Link to="/add-artist" className="add-btn">+ Añadir Artista</Link>
        </div>
        <ArtistList />
      </section>

    </div>
  );
}

export default HomePage;