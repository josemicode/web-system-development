import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TrackForm from '../components/TrackForm';
import { getTrackById, updateTrack } from '../services/trackService';
import './AddTrackPage.css';

function EditTrackPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trackToEdit, setTrackToEdit] = useState(null);

    useEffect(() => {
        getTrackById(id)
            .then(data => setTrackToEdit(data))
            .catch(err => {
                alert("Canción no encontrada");
                navigate('/');
            });
    }, [id, navigate]);

    const handleUpdate = async (formData) => {
        try {
            await updateTrack(id, formData);
            alert("¡Canción actualizada!");
            navigate('/');
        } catch (error) {
            alert("Error al actualizar");
        }
    };

    return (
        <div className="page-outer">
            <div className="page-container">
                <h2 className="page-title">✏️ Editar Canción ✏️</h2>

                <div className="form-wrapper">
                    {trackToEdit ? (
                        <TrackForm
                            initialData={trackToEdit}
                            onSubmit={handleUpdate}
                        />
                    ) : (
                        <p>Cargando datos...</p>
                    )}
                </div>

                <button onClick={() => navigate('/')} className="cancel-btn">Cancelar</button>
            </div>
        </div>
    );
}

export default EditTrackPage;