import React, { useState } from 'react';
import { BookOpen, Download, GraduationCap, Clock, Users, FileText, CheckCircle, Calendar, Target, Award } from 'lucide-react';

const techaidecomptable= () => {
  const [activeTab, setActiveTab] = useState('overview');

  const firstYearCourses = [
    'Comptabilité générale : les concepts de base',
    'Législation des PME',
    'Gestion des documents',
    'Bureautique',
    'Formation dans le secteur AGC',
    'Calculs commerciaux',
    'Statistiques 1',
    'Comptabilité générale : les opérations courantes',
    'Administration du personnel',
    'Logiciel de comptabilité'
  ];

  const secondYearCourses = [
    'Fiscalité de l\'entreprise',
    'Comptabilités des sociétés',
    'Mathématiques financières',
    'Analyse financière',
    'Gestion de la trésorerie',
    'Dossier de création de l\'entreprise'
  ];

  const prerequisites = [
    'Avoir complété un diplôme d\'études secondaires ou professionnelles ou posséder une formation jugée suffisante par le lycée',
    'Avoir interrompu ses études pendant au moins deux sessions consécutives ou une année scolaire',
    'Avoir complété au moins une année d\'études postsecondaires échelonnée sur une période d\'un an ou plus'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 transform -translate-x-32 translate-y-32"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Formation Professionnelle</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Technicien Aide Comptable
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Maîtrisez les compétences essentielles en comptabilité générale, opérations courantes, paies et obligations fiscales pour exceller dans le domaine comptable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger la brochure
                </button>
                <button className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                  S'inscrire maintenant
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Comptabilité"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Diplôme certifié
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: Target },
              { id: 'prerequisites', label: 'Pré-requis', icon: CheckCircle },
              { id: 'program', label: 'Programme', icon: BookOpen },
              { id: 'details', label: 'Détails', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Objective */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Objectif de la Formation</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Le Programme d'aide comptable va à l'essentiel des compétences à maîtriser. Il se concentre sur la comptabilité générale, les opérations courantes et opérations d'inventaires, les paies et le dossier social, les obligations fiscales réglementaires, l'analyse des résultats de l'entreprise.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Durée</h3>
                <p className="text-gray-600">Formation sur 2 années académiques complètes</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Encadrement</h3>
                <p className="text-gray-600">Professeurs experts et suivi personnalisé</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
                <p className="text-gray-600">Diplôme de Technicien Aide Comptable</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prerequisites' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mr-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pré-requis d'admission</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Formation de base requise</h3>
                <p className="text-blue-800">
                  Les personnes intéressées à s'inscrire à ce programme devront avoir complété un diplôme d'études secondaires ou professionnelles ou posséder une formation jugée suffisante par le lycée.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Conditions additionnelles (satisfaire à l'une des suivantes) :</h3>
                <div className="space-y-3">
                  {prerequisites.slice(1).map((prerequisite, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <p className="text-gray-600">{prerequisite}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'program' && (
          <div className="space-y-8">
            {/* First Year */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mr-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1ère Année</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {firstYearCourses.map((course, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Year */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mr-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2ème Année</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {secondYearCourses.map((course, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mr-4">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Documentation et Ressources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-200">
                  <div className="flex items-center mb-4">
                    <Download className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Brochure détaillée</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Détails complets de la formation en format PDF
                  </p>
                  <button className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Contact et Information</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Email:</strong> info@formation-comptable.ma</p>
                    <p><strong>Téléphone:</strong> +212 5XX XX XX XX</p>
                    <p><strong>Adresse:</strong> Rabat, Maroc</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Opportunités de carrière</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Assistant comptable en entreprise
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Aide-comptable en cabinet
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Gestionnaire de paie
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Comptable junior
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">Inscription</h3>
                  <p className="text-yellow-700 text-sm mb-4">
                    Les inscriptions sont ouvertes. Contactez-nous pour plus d'informations sur les modalités d'admission.
                  </p>
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-200">
                    Postuler maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default techaidecomptable;