import React from 'react';
// import { Building2, Code, Calculator, Briefcase, Palette } from 'lucide-react';
import { 
  Building2, 
  Code, 
  Calculator, 
  Briefcase, 
  Palette,
  Settings,
  Shield,
  Zap,
  MapPin,
  TrendingUp
} from "lucide-react";
import addimge from "../assets/jefferson-sees-QGOWg4m3C7o-unsplash.jpg";
import { Link } from 'react-router-dom';
import passion from "../assets/passion.jpg";

const TechnicienSuperieur = () => {
  const programs = [
    {
      id: 1,
      title: "Technicien Supérieur Conducteur de travaux : travaux publics",
      description: "A l'issue de la formation, le lauréat sera en mesure d'exécuter les activités suivantes : Analyser les aspects techniques et administratifs d'un dossier de marché, Proposer les aménagements techniques et financiers nécessaires...",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Technicien Supérieur En développement Informatique",
      description: "Les buts de la formation en TSDI, sont définis à partir des buts généraux de la formation professionnelle en tenant compte, en particulier, de la situation de travail.",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Technicien supérieur Financier comptable",
      description: "S'intégrer harmonieusement au milieu de travail. Destiné à former des techniciens Supérieurs capables d'appliquer les procédures de base en finance et comptabilité, à utiliser les systèmes d'information d'entreprise...",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Technicien Supérieur En gestion des entreprises",
      description: "A l'issue de la formation, le lauréat sera en mesure d'exécuter les activités suivantes : Réaliser la maquette du produit...",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Technicien supérieur Infographie",
      description: "Destiné à former des techniciens Supérieur capables d'appliquer les procédures de base en gestion des entreprises, à utiliser les systèmes d'informatique...",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
  id: 6,
  title: "Technicien Supérieur en Maintenance Industrielle",
  description: "Formation avancée en maintenance préventive et prédictive des équipements industriels. Maîtrise des technologies de surveillance, gestion de la maintenance assistée par ordinateur (GMAO) et optimisation des performances industrielles.",
  icon: <Settings className="w-8 h-8" />,
  color: "from-red-500 to-red-600",
  bgColor: "bg-red-50",
  textColor: "text-red-700",
  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
},
{
  id: 7,
  title: "Technicien Supérieur en Réseaux et Sécurité Informatique",
  description: "Spécialisation en administration des réseaux complexes, cybersécurité et protection des données. Compétences en audit sécuritaire, mise en place de solutions de sécurité et gestion des incidents de sécurité informatique.",
  icon: <Shield className="w-8 h-8" />,
  color: "from-cyan-500 to-cyan-600",
  bgColor: "bg-cyan-50",
  textColor: "text-cyan-700",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
},
{
  id: 8,
  title: "Technicien Supérieur en Énergies Renouvelables et Efficacité Énergétique",
  description: "Formation approfondie en conception et gestion de projets d'énergies renouvelables. Expertise en audit énergétique, dimensionnement d'installations solaires/éoliennes et optimisation de la consommation énergétique.",
  icon: <Zap className="w-8 h-8" />,
  color: "from-emerald-500 to-emerald-600",
  bgColor: "bg-emerald-50",
  textColor: "text-emerald-700",
  image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
},
{
  id: 9,
  title: "Technicien Supérieur en Géomatique et Topographie",
  description: "Maîtrise des systèmes d'information géographique (SIG), télédétection et techniques de levés topographiques avancés. Compétences en cartographie numérique, modélisation 3D du terrain et gestion de bases de données spatiales.",
  icon: <MapPin className="w-8 h-8" />,
  color: "from-teal-500 to-teal-600",
  bgColor: "bg-teal-50",
  textColor: "text-teal-700",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
},
{
  id: 10,
  title: "Technicien Supérieur en Marketing Digital et E-commerce",
  description: "Formation complète en stratégies marketing digitales, gestion de campagnes publicitaires en ligne et développement e-commerce. Expertise en SEO/SEA, analytics web, réseaux sociaux et conversion digitale.",
  icon: <TrendingUp className="w-8 h-8" />,
  color: "from-pink-500 to-pink-600",
  bgColor: "bg-pink-50",
  textColor: "text-pink-700",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
}
  ];

  return (
    <div className="min-h-screen">
      {/* Split Hero Section */}
      <div className="relative min-h-screen mb-130 sm:mb-180 md:mb-240 lg:mb-60 xl:mb-10 max-h-screen lg:flex">
        {/* Left Content */}
        <div className="lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-700 to-amber-400 flex items-center justify-center p-8 lg:p-16" >
          <div className="max-w-lg text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Formation
              <span className="block text-yellow-400">Technicien</span>
              <span className="block">Supérieur</span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
              Développez une expertise technique avancée et prenez des responsabilités dans votre domaine professionnel.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>5 spécialités disponibles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Formation de niveau supérieur</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Accès aux postes d'encadrement</span>
              </div>
            </div>
            
            <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Découvrir nos programmes
            </button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="lg:w-1/2 relative overflow-hidden border-l-gray-900 " style={{ borderLeftWidth: '4px' }}>
          <img 
            src={addimge} 
            alt="Formation Technicien Supérieur"
            className="w-full h-full object-cover "
            style={{ filter: 'brightness(0.8)' , backdropFilter: 'blur(10px)',   }}
          />
          
          {/* Floating Cards */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4">
              {programs.slice(0, 4).map((program, index) => (
                <div 
                  key={program.id}
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <div className={`inline-flex p-2 rounded-lg ${program.bgColor} ${program.textColor} mb-2`}>
                    {program.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {program.title.split(' ').slice(0, 3).join(' ')}...
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Rest of content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Formation Technicien Supérieur
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des formations avancées pour développer une expertise technique de haut niveau dans votre domaine professionnel
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-semibold">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Niveau Supérieur
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Card Header with Background Image */}
              <div className="relative h-52 overflow-hidden">
                {/* Background Image */}
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-75`}></div>
                
                {/* "Supérieur" Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    SUPÉRIEUR
                  </div>
                </div>
                
                {/* Content on top of image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center mb-3">
                    <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg leading-tight">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {program.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 ${program.bgColor} ${program.textColor} rounded-full text-xs font-medium`}>
                    Expertise
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    Leadership
                  </span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium">
                    Innovation
                  </span>
                </div>
                
                {/* Action Buttons */}
                {/* <div className="flex space-x-3">
                  <button className={`flex-1 bg-gradient-to-r ${program.color} text-white py-3 px-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md`}>
                    Découvrir
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group-hover:border-gray-400">
                    Info
                  </button>
                </div> */}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                   style={{
                     borderImage: `linear-gradient(45deg, ${program.color.split(' ')[1]}, ${program.color.split(' ')[3]}) 1`
                   }}></div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Formation Avancée</h3>
            <p className="text-gray-600 text-sm">Programmes techniques de niveau supérieur pour une expertise approfondie</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Encadrement</h3>
            <p className="text-gray-600 text-sm">Développez vos compétences de leadership et de gestion d'équipes</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Opportunités</h3>
            <p className="text-gray-600 text-sm">Accédez à des postes à responsabilités dans votre secteur d'activité</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-b from-gray-900 via-gray-500 to-transparent sm:bg-gradient-to-r from-gray-900 via-gray-500 to-amber-400 rounded-2xl p-10 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Élevez votre carrière au niveau supérieur
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Rejoignez nos formations de technicien supérieur et développez l'expertise nécessaire pour diriger et innover dans votre domaine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/authentification">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Demander des informations
                </button>
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  Télécharger le programme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicienSuperieur;