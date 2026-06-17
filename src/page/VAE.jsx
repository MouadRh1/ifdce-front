// src/pages/VAE.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function VAE() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const diplomas = [
    "Technicien",
    "Technicien Spécialisé",
    "Licence Professionnelle",
    "Master Professionnel",
    "Doctorat Professionnel",
    "MPI (Master Professionnel International)",
    "DBA (Doctorate of Business Administration)"
  ];

  const handleStartVAE = () => {
    // Vérifier si l'utilisateur est connecté
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/vae/request');
    } else {
      navigate('/register', { state: { from: '/vae', intent: 'vae' } });
    }
  };

  const handleAppointment = () => {
    window.open('https://calendly.com/ifdce-vae', '_blank');
  };

  const handleDownloadGuide = () => {
    // Rediriger vers formulaire de demande
    navigate('/contact?subject=guide-vae');
  };

  return (
    <>
      <SEO 
        title="Validation des Acquis de l'Expérience (VAE) - IFDCE"
        description="Obtenez votre diplôme par la VAE au Maroc. Technicien, Licence, Master, Doctorat. Reconnaissance officielle de vos compétences professionnelles."
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Validation des Acquis de l'Expérience (VAE)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformez votre expérience professionnelle en diplôme reconnu
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={handleStartVAE}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            🚀 Commencer ma VAE
          </button>
          <button
            onClick={handleAppointment}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            📅 Prendre un rendez-vous
          </button>
          <button
            onClick={handleDownloadGuide}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            📥 Télécharger le guide VAE
          </button>
        </div>

        {/* Diplômes accessibles */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Diplômes accessibles par VAE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {diplomas.map((diploma, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-3 text-center">
                <span className="text-blue-800 font-medium">{diploma}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domaines couverts */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Domaines couverts</h2>
          <p className="text-gray-700 text-center text-lg">
            La VAE est accessible dans l'ensemble des domaines professionnels et secteurs d'activité, 
            sous réserve de l'existence d'un référentiel de compétences correspondant.
          </p>
        </div>

        {/* Avantages de la VAE */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold mb-2">Reconnaissance officielle</h3>
            <p className="text-gray-600">Diplôme reconnu par l'État et par les entreprises</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="font-bold mb-2">Gain de temps</h3>
            <p className="text-gray-600">Valorisez votre expérience sans reprendre les études</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-bold mb-2">Évolution professionnelle</h3>
            <p className="text-gray-600">Accélérez votre carrière avec un diplôme</p>
          </div>
        </div>
      </div>
    </>
  );
}