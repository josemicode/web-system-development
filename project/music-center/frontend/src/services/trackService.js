import api from './api';

export const getAllTracks = async () => {
  try {
    const response = await api.get('/tracks');
    return response.data;
  } catch (error) {
    console.error("Error fetching tracks:", error);
    throw error;
  }
};

export const createTrack = async (trackData) => {
  try {
    const response = await api.post('/tracks', trackData);
    return response.data;
  } catch (error) {
    console.error("Error creating track:", error);
    throw error;
  }
};

export const getTrackById = async (id) => {
  try {
    const response = await api.get(`/tracks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching track:", error);
    throw error;
  }
};

export const updateTrack = async (id, trackData) => {
  try {
    const response = await api.put(`/tracks/${id}`, trackData);
    return response.data;
  } catch (error) {
    console.error("Error updating track:", error);
    throw error;
  }
};

export const deleteTrack = async (id) => {
  try {
    const response = await api.delete(`/tracks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting track:", error);
    throw error;
  }
};

export const getTracksByAlbumId = async (albumId) => {
  try {
    const response = await api.get(`/tracks?album_id=${albumId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tracks for album ${albumId}:`, error);
    throw error;
  }
};