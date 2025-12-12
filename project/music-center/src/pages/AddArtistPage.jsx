import { useNavigate } from 'react-router-dom';
import ArtistForm from '../components/ArtistForm';
import './AddTrackPage.css';

function AddArtistPage() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
      <div className="page-container">
        <center><h2>🎤 Nuevo Artista</h2></center>
        <ArtistForm onArtistAdded={() => { alert('¡Artista Creado!'); navigate('/'); }} />
        <button onClick={() => navigate('/')} className="cancel-btn">Cancelar</button>
      </div>
    </div>
  );
}
export default AddArtistPage;