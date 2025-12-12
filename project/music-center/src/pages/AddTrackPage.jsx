// src/pages/AddTrackPage.jsx
import { useNavigate } from 'react-router-dom';
import TrackForm from '../components/TrackForm';
import './AddTrackPage.css';

function AddTrackPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("¡Canción guardada con éxito!");
    navigate('/');
  };

  return (
    <div className="page-outer">
      <div className="page-container">
        <h2 className="page-title">Añadir Nueva Canción</h2>

        <div className="form-wrapper">
          <TrackForm onTrackAdded={handleSuccess} />
        </div>

        <button onClick={() => navigate('/')} className="cancel-btn">
          Cancelar y volver
        </button>
      </div>
    </div>
  );
}

export default AddTrackPage;
