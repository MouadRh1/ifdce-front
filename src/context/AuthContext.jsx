// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import api, { setToken, removeToken, getToken } from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setTokenState] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = getToken(); // Utiliser la fonction unifiée
    
    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setTokenState(storedToken);
        // Configurer le token pour axios
        api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      } catch (error) {
        removeToken();
      }
    } else {
    }
    
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setTokenState(authToken);
    // Utiliser la fonction unifiée
    setToken(authToken);
    // console.log('[Auth] Connexion réussie:', userData.email);
  };

  const logout = async () => {
    try {
      if (token) {
        await api.post('/logout');
      }
    } catch (error) {
    } finally {
      setUser(null);
      setTokenState(null);
      removeToken();
      // console.log('[Auth] Déconnexion complète');
      window.location.href = '/login';
    }
  };

  const isAuthenticated = () => {
    return !!(user && getToken());
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const isUser = () => {
    return user?.role === 'user';
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    isUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};