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
    const response = await api.post('/albums', albumData);
    return response.data;
  } catch (error) {
    console.error("Error creating album:", error);
    throw error;
  }
};