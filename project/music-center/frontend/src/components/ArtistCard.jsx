import { useNavigate } from 'react-router-dom';
import './ArtistList.css';

function ArtistCard({ artist, onDelete }) {
    const navigate = useNavigate();

    const handleAction = (e) => {
        const action = e.target.value;
        if (action === 'update') {
            navigate(`/artists/edit/${artist.id}`);
        } else if (action === 'delete') {
            if (window.confirm(`Are you sure you want to delete ${artist.name}?`)) {
                onDelete(artist.id);
            }
        } else if (action === 'add-album') {
            navigate(`/albums/add/${artist.id}`);
        } else if (action === 'add-track') {
            navigate(`/artists/${artist.id}/add-track/select-album`);
        }
        // Reset selection back to default "Actions"
        e.target.value = "";
    };

    return (
        <div className="artist-card">
            <div className="artist-photo artist-avatar">
                <span>{artist.name}</span>
            </div>
            {/* Name removed from h3 as it is now in the avatar */}

            <div className="card-actions">
                <select onChange={handleAction} className="action-select" defaultValue="">
                    <option value="" disabled>⚙️ Actions</option>
                    <option value="update">✏️ Update</option>
                    <option value="delete">🗑️ Delete</option>
                    <option value="add-album">💿 Add Album</option>
                    <option value="add-track">🎵 Add Track</option>
                </select>
            </div>
        </div>
    );
}

export default ArtistCard;
