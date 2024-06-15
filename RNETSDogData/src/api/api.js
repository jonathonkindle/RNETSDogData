import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dogapi.dog/api/v2',
});

export const fetchBreeds = async () => {
  const response = await api.get('/breeds');
  return response.data.data; // Adjusting according to the API response structure
};

export const fetchDogFacts = async () => {
  const response = await api.get('/facts');
  return response.data.data;
};

export const fetchDogGroups = async () => {
  const response = await api.get('/groups');
  return response.data.data;
};
