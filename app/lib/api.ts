import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // or env variable
  withCredentials: true, // 👈 This is super important!
});

export default api;
