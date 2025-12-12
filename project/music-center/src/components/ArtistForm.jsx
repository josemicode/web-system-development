import { useState } from 'react';
import { createArtist } from '../services/artistService';
import './TrackForm.css';

function ArtistForm({ onArtistAdded }) {
  const [formData, setFormData] = useState({ name: '', country: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return alert("Nombre obligatorio");
    await createArtist(formData);
    if (onArtistAdded) onArtistAdded();
  };


    return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="track-form">
        
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Nombre del Artista"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="País"
            className="form-input"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-btn">
          Crear Artista
        </button>
        
      </form>
    </div>
  );
}

export default ArtistForm;