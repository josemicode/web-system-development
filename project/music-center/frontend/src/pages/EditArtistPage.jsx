import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArtist, updateArtist } from '../services/artistService';
import ArtistForm from '../components/ArtistForm';
import '../components/TrackForm.css'; // Reusing form styles

function EditArtistPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [artist, setArtist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const data = await getArtist(id);
                setArtist(data);
            } catch (err) {
                alert("Error loading artist data");
                navigate('/artists');
            } finally {
                setLoading(false);
            }
        };
        fetchArtist();
    }, [id, navigate]);

    const handleUpdate = async (formData) => {
        try {
            await updateArtist(id, formData);
            alert('Artist updated successfully');
            navigate('/artists');
        } catch (err) {
            alert('Error updating artist');
        }
    };

    // We need to modify ArtistForm to accept initial values or handle this logic.
    // Since ArtistForm manages its own state, let's see if we can pass props to initialize it.
    // The current ArtistForm implementation doesn't look like it accepts initialData. 
    // I will need to update ArtistForm to accept `initialData` or `artist` prop.

    if (loading) return <p className="loading">Loading...</p>;

    return (
        <div className="form-container">
            <h2 className="page-title">✏️ Edit Artist</h2>
            {artist && (
                <ArtistForm
                    initialData={artist}
                    onSubmit={handleUpdate}
                    isEdit={true}
                />
            )}
            <button onClick={() => navigate('/artists')} className="cancel-btn" style={{ marginTop: '1rem' }}>
                Cancel
            </button>
        </div>
    );
}

export default EditArtistPage;
