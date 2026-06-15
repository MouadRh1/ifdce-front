// Create: src/config/api.js
import axios from 'axios';

// API Base URL configuration
const getApiBaseUrl = () => {
  // Development - vérifier correctement l'environnement
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' ||
      window.location.port === '5173' ||
      window.location.port === '5174' ||
      window.location.port === '5175') {
    return 'https://linen-sheep-933989.hostingersite.com/api';
  }
  // Production
  return 'https://linen-sheep-933989.hostingersite.com/api';
};

const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 30000, // Augmenter le timeout à 30 secondes
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false, // Mettre à false si vous n'utilisez pas les cookies
});

// Intercepteur pour ajouter le token à chaque requête
api.interceptors.request.use(
  (config) => {
    // Essayer plusieurs clés possibles pour le token
    const token = localStorage.getItem('auth_token') || 
                  localStorage.getItem('token') || 
                  sessionStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url} - Token présent: Oui`);
    } else {
      console.warn(`[API Request] ${config.method?.toUpperCase()} ${config.url} - Token présent: Non`);
    }
    
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses
api.interceptors.response.use(
  (response) => {
    // Log des réponses réussies (optionnel, désactiver en production)
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API Response] ${response.config.url} - Status: ${response.status}`);
    }
    return response;
  },
  (error) => {
    // Gestion des erreurs
    if (error.code === 'ECONNABORTED') {
      console.error('[API Error] Timeout - La requête a pris trop de temps');
      error.message = 'Le serveur ne répond pas. Veuillez réessayer.';
    } else if (error.response) {
      // Le serveur a répondu avec un code d'erreur
      console.error(`[API Error] ${error.response.status} - ${error.response.config?.url}`, error.response.data);
      
      // Gestion spéciale pour 401 Unauthorized
      if (error.response.status === 401) {
        console.warn('[API Error] Non authentifié - Redirection vers login');
        // Nettoyer les tokens
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        
        // Éviter les redirections multiples
        if (!window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
      }
      
      // Personnaliser le message d'erreur
      if (error.response.data?.message) {
        error.userMessage = error.response.data.message;
      } else if (error.response.data?.error) {
        error.userMessage = error.response.data.error;
      } else {
        error.userMessage = `Erreur ${error.response.status}: ${error.response.statusText}`;
      }
    } else if (error.request) {
      // La requête a été faite mais pas de réponse
      console.error('[API Error] Pas de réponse du serveur', error.request);
      error.userMessage = 'Impossible de contacter le serveur. Vérifiez votre connexion.';
    } else {
      // Erreur lors de la configuration de la requête
      console.error('[API Error] Erreur de configuration', error.message);
      error.userMessage = 'Une erreur est survenue. Veuillez réessayer.';
    }
    
    return Promise.reject(error);
  }
);

// Fonction utilitaire pour vérifier l'authentification
export const isAuthenticated = () => {
  const token = localStorage.getItem('auth_token') || localStorage.getItem('token');
  return !!token;
};

// Fonction utilitaire pour obtenir le token
export const getToken = () => {
  return localStorage.getItem('auth_token') || localStorage.getItem('token');
};

// Fonction utilitaire pour définir le token
export const setToken = (token) => {
  if (token) {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

// Fonction utilitaire pour supprimer le token
export const removeToken = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  sessionStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
};

// Fonction utilitaire pour obtenir les en-têtes d'authentification
export const getAuthHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default api;