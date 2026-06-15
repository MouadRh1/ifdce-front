import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Vérifier si l'élément root existe
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("L'élément root n'a pas été trouvé dans le DOM");
}

// Créer et rendre l'application
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);