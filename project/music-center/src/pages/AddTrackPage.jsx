import { useNavigate } from 'react-router-dom';
import TrackForm from '../components/TrackForm';

function AddTrackPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("¡Canción guardada!");
    navigate('/'); 
  };

  return (
    <div className="page-container">
      <h2>Añadir Nueva Canción</h2>
      <TrackForm onTrackAdded={handleSuccess} />
      
      <button onClick={() => navigate('/')} style={{marginTop: '1rem', background: 'transparent', border: '1px solid #666'}}>
        Cancelar y volver
      </button>
    </div>
  );
}

export default AddTrackPage;