import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTracks, deleteTrack } from '../services/trackService';
import './TrackList.css';

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTracks();
  }, []);

  const loadTracks = async () => {
    try {
      const data = await getAllTracks();
      setTracks(data);
    } catch (err) {
      setError('Tracks loading error.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this track?")) return;

    try {
      await deleteTrack(id);
      setTracks(prevTracks => prevTracks.filter(track => track.id !== id));
    } catch (err) {
      alert("Error deleting track.");
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return 'N/A';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (loading) return <p className="loading">Loading tracks... 🎵</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="track-list-container">
      <div className="track-grid">
        {tracks.map((track) => (
          <div key={track.id} className="track-card">
            <h3>{track.title}</h3>
            <p className="artist-name">🎤 {track.artist_name}</p>

            <div className="card-footer">
              <div className="duration-wrapper">
                <span className="duration">⏱️ {formatDuration(track.duration)}</span>
              </div>

              <div className="actions">
                <Link to={`/edit-track/${track.id}`} className="edit-btn" title="Edit">
                  ✏️
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(track.id)}
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackList;