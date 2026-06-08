// Create: src/config/api.js
import axios from 'axios';

// API Base URL configuration
const getApiBaseUrl = () => {
  // Development
  if (window.location.hostname === 'localhost' || window.location.hostname === '5175') {
    return 'https://honeydew-vulture-244652.hostingersite.com/api';
  }
  // Production
  return 'https://honeydew-vulture-244652.hostingersite.com/api';
};

const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;