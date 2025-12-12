import { useEffect, useState } from 'react';
import { getAllTracks } from '../services/trackService';
import '../pages/AlbumDetailPage.css'; // Reusing the player-style CSS
import '../components/ArtistList.css'; // General styles

function TracksPage() {
    const [tracks, setTracks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const data = await getAllTracks();
                setTracks(data);
            } catch (err) {
                setError('Error loading tracks');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTracks();
    }, []);

    const formatDuration = (seconds) => {
        if (!seconds) return '--:--';
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const filteredTracks = tracks.filter(track =>
        track.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="page-container"><p className="loading">Loading tracks... 🎵</p></div>;
    if (error) return <div className="page-container"><p className="error">{error}</p></div>;

    return (
        <div className="page-container">
            <h2 className="page-title">🎵 Tracks 🎵</h2>

            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                <input
                    type="text"
                    placeholder="Search tracks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '10px 15px',
                        fontSize: '1.1rem',
                        borderRadius: '25px',
                        border: '1px solid #ccc',
                        width: '100%',
                        maxWidth: '500px',
                        outline: 'none',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                />
            </div>

            <div className="track-list-container">
                {filteredTracks.length === 0 ? (
                    <p className="no-tracks">No tracks found.</p>
                ) : (
                    <ul className="player-track-list">
                        {filteredTracks.map((track, index) => (
                            <li key={track.id} className="player-track-item">
                                <span className="track-number">{index + 1}</span>
                                <span className="track-title">{track.title}</span>
                                {track.artist_name && <span style={{ marginRight: '1rem', color: '#888', fontSize: '0.9rem' }}>{track.artist_name}</span>}
                                {track.album_title && <span style={{ marginRight: '1rem', color: '#aaa', fontSize: '0.8rem', fontStyle: 'italic' }}>{track.album_title}</span>}
                                <span className="track-duration">{formatDuration(track.duration)}</span>
                                <button className="play-btn">▶</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TracksPage;
