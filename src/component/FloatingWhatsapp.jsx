// src/components/FloatingWhatsApp.jsx
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  // Remplacez par le vrai numéro de téléphone
  const phoneNumber = "212665654031"; // Format international sans le +
  const message =
    "Bonjour%2C%20je%20souhaite%20avoir%20plus%20d%27informations%20sur%20la%20VAE%20et%20vos%20formations.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      style={{
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        backgroundColor: "#25D366",
      }}
    >
      <FaWhatsapp className="w-8 h-8" strokeWidth={2} />

      {/* Badge de notification (optionnel) */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        !
      </span>
    </a>
  );
}
