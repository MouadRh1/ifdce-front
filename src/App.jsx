import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router/indexrouter";
import { AuthProvider } from './context/AuthContext';
import { NavbarProvider } from './context/NavbarContext';
import { HelmetProvider } from 'react-helmet-async';
import FloatingWhatsApp from './component/FloatingWhatsapp';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <NavbarProvider>
          <RouterProvider router={router} />
          <FloatingWhatsApp/>
        </NavbarProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;