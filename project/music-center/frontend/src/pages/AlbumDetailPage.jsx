import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAlbum, deleteAlbum } from '../services/albumService';
import { getTracksByAlbumId, deleteTrack } from '../services/trackService';
import { getArtist } from '../services/artistService';
import '../components/TrackList.css'; // Reusing track list styles
import './AlbumDetailPage.css'; // New styles

function AlbumDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState(null);
    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const albumData = await getAlbum(id);
                setAlbum(albumData);

                // Fetch tracks
                const tracksData = await getTracksByAlbumId(id);
                setTracks(tracksData);

                // Fetch artist if we have artist_id
                if (albumData.artist_id) {
                    const artistData = await getArtist(albumData.artist_id);
                    setArtist(artistData);
                }
            } catch (err) {
                console.error(err);
                alert("Error loading album details");
                navigate('/albums');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id, navigate]);

    const formatDuration = (seconds) => {
        if (!seconds) return '--:--';
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleDeleteAlbum = async () => {
        if (window.confirm("Are you sure you want to delete this album?")) {
            try {
                await deleteAlbum(id); // Import this!
                alert("Album deleted");
                navigate('/albums');
            } catch (err) {
                alert("Error deleting album");
            }
        }
    };

    const handleDeleteTrack = async (trackId) => {
        if (window.confirm("Delete this track?")) {
            try {
                await deleteTrack(trackId); // Import this!
                setTracks(tracks.filter(t => t.id !== trackId));
            } catch (err) {
                alert("Error deleting track");
            }
        }
    };

    if (loading) return <div className="page-container"><p className="loading">Loading Album... 💿</p></div>;
    if (!album) return null;

    return (
        <div className="page-container">
            <div className="album-header">
                <div className="album-header-info">
                    <h2 className="album-title">{album.title}</h2>
                    {artist && <h3 className="album-artist">{artist.name}</h3>}
                    <p className="album-meta">{album.release_date ? new Date(album.release_date).getFullYear() : ''}</p>
                </div>
                <div className="album-header-actions">
                    <button onClick={() => navigate(`/albums/edit/${id}`)} className="action-btn edit-action" title="Edit Album">✏️</button>
                    <button onClick={handleDeleteAlbum} className="action-btn delete-action" title="Delete Album">🗑️</button>
                </div>
                {/* Placeholder cover art */}
                <div className="album-header-art">💿</div>
            </div>

            <div className="track-list-container">
                {tracks.length === 0 ? (
                    <p className="no-tracks">No tracks in this album yet.</p>
                ) : (
                    <ul className="player-track-list">
                        {tracks.map((track, index) => (
                            <li key={track.id} className="player-track-item">
                                <span className="track-number">{index + 1}</span>
                                <span className="track-title">{track.title}</span>
                                <span className="track-duration">{formatDuration(track.duration)}</span>
                                <div className="track-actions">
                                    <button onClick={() => navigate(`/edit-track/${track.id}`)} className="icon-btn" title="Edit Track">✏️</button>
                                    <button onClick={() => handleDeleteTrack(track.id)} className="icon-btn" title="Delete Track">🗑️</button>
                                </div>
                                <button className="play-btn">▶</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button onClick={() => navigate('/albums')} className="back-btn">
                Back to Albums
            </button>
        </div>
    );
}

export default AlbumDetailPage;
