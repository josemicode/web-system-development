
import { useNavigate } from 'react-router-dom';
import AlbumForm from '../components/AlbumForm';
import './AddTrackPage.css';

function AddAlbumPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("¡Álbum creado con éxito!");
    navigate('/');
  };

  return (
    <div className="page-outer">
      <div className="page-container">
        <h2 className="page-title">💿 Añadir Nuevo Álbum 💿</h2>

        <div className="form-wrapper">
          <AlbumForm onAlbumAdded={handleSuccess} />
        </div>

        <button onClick={() => navigate('/')} className="cancel-btn">
          Cancelar y volver
        </button>
      </div>
    </div>
  );
}

export default AddAlbumPage;