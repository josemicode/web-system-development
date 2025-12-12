import api from './api';

export const getAllArtists = async () => {
  try {
    const response = await api.get('/artists');
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};

export const createArtist = async (data) => {
  try {
    const response = await api.post('/artists', data);
    return response.data;
  } catch (error) {
    console.error("Error creating artist:", error);
    throw error;
  }
};