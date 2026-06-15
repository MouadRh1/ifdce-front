import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router/indexrouter";
import { AuthProvider } from './context/AuthContext';
import { NavbarProvider } from './context/NavbarContext';
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