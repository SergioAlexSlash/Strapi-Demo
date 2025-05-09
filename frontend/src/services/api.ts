import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/api',
  withCredentials: true,  // Si necesitas enviar cookies
});

export const getCategories = async () => {
  try {
    const res = await axiosInstance.get('/categories');
    return res.data.data;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
};