import { useState } from 'react';
import { createAlbum } from '../services/albumService';
import './TrackForm.css';

function AlbumForm({ onAlbumAdded, artistId }) {
  const [formData, setFormData] = useState({ title: '', artist: artistId || '', year: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist) return alert("Incomplete data");

    try {
      await createAlbum(formData);
      if (onAlbumAdded) onAlbumAdded();
    } catch (error) {
      alert("Saving Failure");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="track-form">

        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Album Title"
            className="form-input"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            className="form-input"
            value={formData.artist}
            onChange={handleChange}
            readOnly={!!artistId}
            style={artistId ? { backgroundColor: '#e0e0e0' } : {}}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="year"
            placeholder="Year"
            className="form-input"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-btn">
          Save Album
        </button>

      </form>
    </div>
  );

}

export default AlbumForm;