import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Your Flask backend URL

export const getFeatures = async () => {
  const response = await axios.get(`${API_BASE_URL}/features`);
  return response.data;
};

export const toggleFeature = async (featureName, status) => {
  const response = await axios.put(`${API_BASE_URL}/features/${featureName}`, {
    status,
  });
  return response.data;
};
