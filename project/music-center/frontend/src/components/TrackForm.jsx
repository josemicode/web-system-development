import { useState } from 'react';
import { createTrack } from '../services/trackService';
import './TrackForm.css';


function TrackForm({ onTrackAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    artist_name: '',
    duration: '',
    album_title: 'Single' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
  
    if (!formData.title || !formData.artist_name) {
      alert("Por favor, rellena título y artista");
      return;
    }

    try {
      await createTrack(formData);
      
      setFormData({ title: '', artist_name: '', duration: '', album_title: 'Single' });
      
      if (onTrackAdded) onTrackAdded();
      
    } catch (error) {
      console.error("Error al crear:", error);
      alert("Error al guardar la canción");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="track-form">
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Título de la canción"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="artist_name"
            placeholder="Artista"
            value={formData.artist_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="duration"
            placeholder="Duración (segundos)"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">Guardar Canción</button>
      </form>
    </div>
  );
}

export default TrackForm;