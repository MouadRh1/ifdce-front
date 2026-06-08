import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router/indexrouter";
import { AuthProvider } from './context/AuthContext';
import { NavbarProvider } from './context/NavbarContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <NavbarProvider>
          <RouterProvider router={router} />
        </NavbarProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;

<div style={{ padding: '20px' }}>
      <h1>IFDCE Test - Localhost</h1>
      <p>If you see this, React is working locally!</p>
    </div>