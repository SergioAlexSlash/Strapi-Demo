import axios from 'axios';

const API_URL = 'http://localhost:1337/api';  // Cambia si Strapi está en otro dominio

export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
};