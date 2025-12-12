import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllAlbums } from '../services/albumService';
import '../components/AlbumList.css'; // Reuse existing styles

function AlbumsPage() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const data = await getAllAlbums();
                setAlbums(data);
            } catch (err) {
                setError('Error loading albums');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAlbums();
    }, []);

    const handleAlbumClick = (id) => {
        navigate(`/albums/${id}`);
    };

    if (loading) return <div className="page-container"><p className="loading">Loading albums... 💿</p></div>;
    if (error) return <div className="page-container"><p className="error">{error}</p></div>;

    return (
        <div className="page-container">
            <h2 className="page-title">💿 Albums 💿</h2>
            <div className="album-grid">
                {albums.map((album) => (
                    <div key={album.id} className="album-card" onClick={() => handleAlbumClick(album.id)} style={{ cursor: 'pointer' }}>
                        {/* Fallback for cover image if not present */}
                        <div className="album-cover-placeholder" style={{
                            width: '100%',
                            height: '200px',
                            backgroundColor: '#333',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '3rem'
                        }}>
                            💿
                        </div>
                        <div className="album-info">
                            <h3>{album.title}</h3>
                            {/* Note: backend might not return artist name in getAllAlbums, we might need to join or fetch. 
                  Checking albumService getAllAlbums -> /api/albums -> AlbumController listAlbums -> findAll -> SELECT * FROM albums
                  So it returns artist_id, not artist name.
                  We can fetch artist for each album, or just show year for now to be fast.
                  Ideally backend should join.
               */}
                            <span className="album-year">{album.release_date ? new Date(album.release_date).getFullYear() : 'Unknown Year'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlbumsPage;
