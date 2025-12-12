import { useNavigate } from 'react-router-dom';
import TrackForm from '../components/TrackForm';
import { createTrack } from '../services/trackService';
import './AddTrackPage.css';

function AddTrackPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await createTrack(formData);
      alert("¡Canción guardada con éxito!");
      navigate('/');
    } catch (error) {
      alert("Error al guardar la canción");
    }
  };

  return (
    <div className="page-outer">
      <div className="page-container">
        <h2 className="page-title">🎵 Añadir Nueva Canción🎵 </h2>

        <div className="form-wrapper">
          <TrackForm onSubmit={handleCreate} />
        </div>

        <button onClick={() => navigate('/')} className="cancel-btn">
          Cancelar y volver
        </button>
      </div>
    </div>
  );
}

export default AddTrackPage;