import { useState } from 'react';
import { createAlbum } from '../services/albumService';
import './TrackForm.css'; 

function AlbumForm({ onAlbumAdded }) {
  const [formData, setFormData] = useState({ title: '', artist: '', year: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist) return alert("Datos incompletos");

    try {
      await createAlbum(formData);
      if (onAlbumAdded) onAlbumAdded();
    } catch (error) {
      alert("Error al guardar");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="track-form">
        
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Título del Álbum"
            className="form-input"
            value={formData.title} 
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="artist"
            placeholder="Artista"
            className="form-input"
            value={formData.artist}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="year"
            placeholder="Año"
            className="form-input"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-btn">
          Crear Álbum
        </button>
        
      </form>
    </div>
  );

}

export default AlbumForm;