import { useState, useEffect } from 'react';
import './TrackForm.css';
function TrackForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    artist_name: '',
    duration: '',
    album_title: 'Single'
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist_name) return alert("Fill in the required fields");

    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="track-form">

        {/* GROUP 1: TITLE */}
        <div className="form-group">
          <input
            name="title"
            type="text"
            placeholder="Track title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* GROUP 2: ARTIST */}
        <div className="form-group">
          <input
            name="artist_name"
            type="text"
            placeholder="Artist name"
            value={formData.artist_name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* GROUP 3: DURATION */}
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
          {initialData ? "Update Track" : "Create Track"}
        </button>
      </form>
    </div>
  );
}

export default TrackForm;