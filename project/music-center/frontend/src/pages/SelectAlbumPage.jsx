import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllAlbums } from '../services/albumService';
import { getArtist } from '../services/artistService';
import '../components/ArtistList.css';

function SelectAlbumPage() {
    const { artistId } = useParams();
    const navigate = useNavigate();
    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [albumsData, artistData] = await Promise.all([
                    getAllAlbums(artistId),
                    getArtist(artistId)
                ]);
                setAlbums(albumsData);
                setArtist(artistData);
            } catch (err) {
                console.error(err);
                alert("Error loading data");
                navigate('/artists');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [artistId, navigate]);

    const handleSelectAlbum = (albumId) => {
        navigate(`/artists/${artistId}/albums/${albumId}/add-track`);
    };

    if (loading) return <div className="page-container"><p className="loading">Loading...</p></div>;

    return (
        <div className="page-container">
            <h2 className="page-title">Select Album for {artist?.name}</h2>
            <div className="artist-grid" style={{ justifyContent: 'center' }}>
                {/* Single Option */}
                <div className="artist-card" style={{ cursor: 'pointer' }} onClick={() => handleSelectAlbum(-1)}>
                    <div className="artist-photo artist-avatar" style={{ background: 'linear-gradient(135deg, #ff9a9e, #fecfef)' }}>
                        <span>Single 🎵</span>
                    </div>
                    <h3>Single</h3>
                </div>

                {/* Albums */}
                {albums.map(album => (
                    <div key={album.id} className="artist-card" style={{ cursor: 'pointer' }} onClick={() => handleSelectAlbum(album.id)}>
                        <div className="artist-photo artist-avatar" style={{ background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' }}>
                            <span style={{ fontSize: '0.8rem' }}>{album.title}</span>
                        </div>
                        <h3>{album.title}</h3>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate('/artists')} className="cancel-btn" style={{ marginTop: '2rem' }}>
                Cancel
            </button>
        </div>
    );
}

export default SelectAlbumPage;
