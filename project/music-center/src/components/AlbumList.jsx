import { useEffect, useState } from 'react';
import { getAllAlbums } from '../services/albumService';
import './AlbumList.css';

function AlbumList() {

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await getAllAlbums();
        setAlbums(data);
      } catch (err) {
        setError('Error al cargar álbumes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, []);


  if (loading) return <p className="loading">Cargando álbumes... 💿</p>;
  if (error) return <p className="error">{error}</p>;


  return (
    <div className="album-grid">
      {albums.map((album) => (
        <div key={album.id} className="album-card">
          <img src={album.cover} alt={album.title} className="album-cover" />
          <div className="album-info">
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
            <span className="album-year">{album.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlbumList;