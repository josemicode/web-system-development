import { useNavigate } from 'react-router-dom';
import AlbumForm from '../components/AlbumForm';
import './AddTrackPage.css'; 

function AddAlbumPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("¡Álbum creado!");
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
      <div className="page-container">
        <center><h2>💿 Nuevo Álbum</h2></center>
        <AlbumForm onAlbumAdded={handleSuccess} />
        <button onClick={() => navigate('/')} className="cancel-btn">Cancelar</button>
      </div>
    </div>
  );
}

export default AddAlbumPage;