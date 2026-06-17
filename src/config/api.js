// src/config/api.js
import axios from 'axios';

const API_BASE_URL = 'https://linen-sheep-933989.hostingersite.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false,
});

// Intercepteur requête : ajout du token
api.interceptors.request.use(
  (config) => {
    // Chercher le token avec les deux clés possibles
    const token = localStorage.getItem('auth_token') || localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('[API] Token trouvé pour', config.url);
    } else {
      console.warn('[API] Pas de token pour', config.url);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepteur réponse : gestion des erreurs
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      error.userMessage = 'Le serveur ne répond pas. Veuillez réessayer.';
    } else if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.warn('[API] 401 Unauthorized - Déconnexion');
        // Nettoyer les deux clés
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete api.defaults.headers.common['Authorization'];
        
        // Rediriger vers login si pas déjà sur login
        if (!window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
      }

      error.userMessage =
        error.response.data?.message ||
        error.response.data?.error ||
        `Erreur ${status}: ${error.response.statusText}`;

    } else if (error.request) {
      error.userMessage = 'Impossible de contacter le serveur. Vérifiez votre connexion.';
    } else {
      error.userMessage = 'Une erreur est survenue. Veuillez réessayer.';
    }

    return Promise.reject(error);
  }
);

// Fonctions utilitaires unifiées
export const getToken = () => localStorage.getItem('auth_token') || localStorage.getItem('token');

export const setToken = (token) => {
  if (token) {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('token', token); // Stocker dans les deux clés pour compatibilité
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('[API] Token stocké');
  }
};

export const removeToken = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  delete api.defaults.headers.common['Authorization'];
  console.log('[API] Token supprimé');
};

export const isAuthenticated = () => !!getToken();

export const getAuthHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default api;