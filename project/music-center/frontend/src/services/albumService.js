import api from './api';

export const getAllAlbums = async () => {
  try {
    const response = await api.get('/albums');
    return response.data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
};

export const createAlbum = async (albumData) => {
  try {
    const payload = {
      title: albumData.title,
      artist_id: albumData.artist ? parseInt(albumData.artist) : null,
      release_date: albumData.year ? `${albumData.year}-01-01` : null,
    };
    const response = await api.post('/albums', payload);
    return response.data;
  } catch (error) {
    console.error("Error creating album:", error);
    throw error;
  }
};