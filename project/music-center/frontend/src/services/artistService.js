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

export const getArtist = async (id) => {
  try {
    const response = await api.get(`/artists/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching artist with id ${id}:`, error);
    throw error;
  }
};

export const updateArtist = async (id, data) => {
  try {
    const response = await api.put(`/artists/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating artist with id ${id}:`, error);
    throw error;
  }
};

export const deleteArtist = async (id) => {
  try {
    const response = await api.delete(`/artists/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting artist with id ${id}:`, error);
    throw error;
  }
};