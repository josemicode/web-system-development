import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAlbum, updateAlbum } from '../services/albumService';
import './EditAlbumPage.css';

function EditAlbumPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        year: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const data = await getAlbum(id);
                setFormData({
                    title: data.title,
                    year: data.release_date ? new Date(data.release_date).getFullYear() : ''
                });
            } catch (err) {
                alert("Error loading album");
                navigate('/albums');
            } finally {
                setLoading(false);
            }
        };
        fetchAlbum();
    }, [id, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateAlbum(id, formData);
            alert("Album updated successfully!");
            navigate(`/albums/${id}`);
        } catch (err) {
            alert("Error updating album");
        }
    };

    if (loading) return <div className="page-container"><p className="loading">Loading...</p></div>;

    return (
        <div className="form-container">
            <h2 className="page-title">✏️ Edit Album ✏️</h2>
            <form onSubmit={handleSubmit} className="album-form">
                <div className="form-group">
                    <label>Album Title</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Release Year</label>
                    <input
                        name="year"
                        type="number"
                        value={formData.year}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="save-btn">Update Album</button>
            </form>
            <button onClick={() => navigate(`/albums/${id}`)} className="cancel-btn" style={{ marginTop: '1rem' }}>
                Cancel
            </button>
        </div>
    );
}

export default EditAlbumPage;
