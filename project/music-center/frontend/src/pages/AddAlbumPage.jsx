
import { useNavigate, useParams } from 'react-router-dom';
import AlbumForm from '../components/AlbumForm';
import './AddTrackPage.css';

function AddAlbumPage() {
  const navigate = useNavigate();
  const { artistId } = useParams();

  const handleSuccess = () => {
    alert("Album created successfully!");
    navigate('/');
  };

  return (
    <div className="page-outer">
      <div className="page-container">
        <h2 className="page-title">💿 Add New Album 💿</h2>

        <div className="form-wrapper">
          <AlbumForm onAlbumAdded={handleSuccess} artistId={artistId} />
        </div>

        <button onClick={() => navigate('/')} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddAlbumPage;