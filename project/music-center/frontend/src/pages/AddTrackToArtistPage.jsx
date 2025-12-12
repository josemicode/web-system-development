import { useNavigate, useParams } from 'react-router-dom';
import TrackForm from '../components/TrackForm';
import { createTrack } from '../services/trackService';
import '../components/TrackForm.css';

function AddTrackToArtistPage() {
    const navigate = useNavigate();
    const { artistId, albumId } = useParams();

    const handleCreate = async (formData) => {
        try {
            // Prepare payload
            const trackData = {
                ...formData,
                duration: formData.duration ? parseInt(formData.duration) : null,
                artist_id: parseInt(artistId), // Context from URL
                album_id: parseInt(albumId) === -1 ? null : parseInt(albumId) // Context from URL
            };

            // Remove artist_name from payload as we are using artist_id
            delete trackData.artist_name;
            // Also remove album_title if present, though backend likely ignores extraneous fields, cleaner to remove.
            delete trackData.album_title;


            await createTrack(trackData);
            alert("Track created successfully!");
            navigate('/');
        } catch (error) {
            alert("Error creating track");
            console.error(error);
        }
    };

    // Pre-fill form? 
    // TrackForm expects artist_name. We have artistId. 
    // We should ideally fetch artist name to pre-fill it or modify TrackForm to handle ID.
    // For simplicity and matching requirements "passed as context", we can just handle it in submission.
    // However, TrackForm requires artist_name. Let's make it optional or pre-fill it with "Loading..." then real name.
    // But wait, the requirement says "artist_id will be passed as context...".
    // Let's rely on the user filling the title and duration. The artist name is technically not needed for creation if we send artist_id.
    // BUT TrackForm enforces artist_name.
    // Let's modify TrackForm to not enforce artist_name if we are in this "context" mode, OR better:
    // Since we are reusing TrackForm, let's just let it be. But the prompt says "form with remaining data required (track title and optional duration)".
    // This implies artist and album are NOT to be filled by user.
    // So I should probably NOT use TrackForm "as is" if it forces Artist Name.
    // Or I can modify TrackForm.

    // Let's create a specific form wrapper or pass props to TrackForm to hide/disable fields.
    // Or just create a simple form here since it's very specific.

    return (
        <div className="form-container">
            <h2 className="page-title">🎵 Add Track 🎵</h2>
            <AddTrackContextForm onSubmit={handleCreate} />
            <button onClick={() => navigate('/artists')} className="cancel-btn" style={{ marginTop: '1rem' }}>
                Cancel
            </button>
        </div>
    );
}

function AddTrackContextForm({ onSubmit }) {
    const [formData, setFormData] = useState({ title: '', duration: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title) return alert("Title is required");
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="track-form">
            <div className="form-group">
                <input
                    name="title"
                    type="text"
                    placeholder="Track Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    name="duration"
                    type="number"
                    min="0"
                    placeholder="Duration (seconds)"
                    value={formData.duration}
                    onChange={handleChange}
                    className="form-input"
                />
            </div>
            <button type="submit" className="save-btn">
                Save Track
            </button>
        </form>
    );
}

import { useState } from 'react'; // Needed for the inner component

export default AddTrackToArtistPage;
