import { useState } from 'react';
import { createArtist } from '../services/artistService';
import './TrackForm.css';

function ArtistForm({ onArtistAdded, initialData, onSubmit, isEdit }) {
  const [formData, setFormData] = useState(initialData || { name: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return alert("Artist name is required");

    if (isEdit && onSubmit) {
      await onSubmit(formData);
    } else {
      await createArtist(formData);
      if (onArtistAdded) onArtistAdded();
    }
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="track-form">

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Artist name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Country not supported in DB yet */}

        <button type="submit" className="save-btn">
          {isEdit ? 'Update Artist' : 'Create Artist'}
        </button>

      </form>
    </div>
  );
}

export default ArtistForm;