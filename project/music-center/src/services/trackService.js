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