import { useNavigate } from 'react-router-dom';
import ArtistForm from '../components/ArtistForm';
import './AddTrackPage.css';

function AddArtistPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("Artist created successfully!");
    navigate('/');
  };

  return (
    <div className="page-outer">
      <div className="page-container">
        <h2 className="page-title">🎤 Add New Artist 🎤</h2>

        <div className="form-wrapper">
          <ArtistForm onArtistAdded={handleSuccess} />
        </div>

        <button onClick={() => navigate('/artists')} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddArtistPage;