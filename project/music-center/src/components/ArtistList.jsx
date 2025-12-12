import { useEffect, useState } from 'react';
import { getAllArtists } from '../services/artistService';
import './ArtistList.css';

function ArtistList() {

  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const data = await getAllArtists();
        setArtists(data);
      } catch (err) {
        setError('Error al cargar artistas.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

 
  if (loading) return <p className="loading">Cargando artistas... 🎤</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="artist-grid">
      {artists.map((artist) => (
        <div key={artist.id} className="artist-card">
          <img src={artist.photo} alt={artist.name} className="artist-photo" />
          <h3>{artist.name}</h3>
          <p className="artist-country">🌍 {artist.country}</p>
        </div>
      ))}
    </div>
  );
}

export default ArtistList;