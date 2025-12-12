import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllArtists, deleteArtist } from '../services/artistService';
import ArtistCard from '../components/ArtistCard';
import '../components/ArtistList.css'; // Reusing styles for grid

function ArtistsPage() {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchArtists = async () => {
        try {
            setLoading(true);
            const data = await getAllArtists();
            setArtists(data);
        } catch (err) {
            setError('Error loading artists.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArtists();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteArtist(id);
            // Optimistic update or refetch
            setArtists(artists.filter(a => a.id !== id));
        } catch (err) {
            alert('Error deleting artist');
            console.error(err);
        }
    };

    if (loading) return <div className="page-container"><p className="loading">Loading artists... 🎤</p></div>;
    if (error) return <div className="page-container"><p className="error">{error}</p></div>;

    return (
        <div className="page-container">
            <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 className="page-title" style={{ marginBottom: 0 }}>🎤 Artists 🎤</h2>
                <Link to="/add-artist" className="save-btn" style={{ textDecoration: 'none', width: 'auto', padding: '0.5rem 1rem' }}>
                    ➕ Add Artist
                </Link>
            </div>
            <div className="artist-grid">
                {artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}

export default ArtistsPage;
