import { useEffect, useState } from 'react';
import { getAllTracks } from '../services/trackService';
import './TrackList.css';

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getAllTracks();
        setTracks(data);
      } catch (err) {
        setError('Error al cargar canciones.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTracks();
  }, []);

  const formatDuration = (seconds) => {
    if (!seconds) return 'N/A';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (loading) return <p className="loading">Cargando tu música... 🎵</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="track-list-container">

      <div className="track-grid">
        {tracks.map((track) => (
          <div key={track.id} className="track-card">
            <h3>{track.title}</h3>
            <p className="artist-name">🎤 {track.artist_name}</p>
            <span className="duration">⏱️ {formatDuration(track.duration)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackList;