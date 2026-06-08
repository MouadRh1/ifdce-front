import React from 'react';
import {Link} from 'react-router-dom';
import { Brain, Users, Award, Banknote, Calculator, Building2, Home, Palette, Construction, GraduationCap } from 'lucide-react';
import { button } from 'framer-motion/client';
import { 

    Shield,
    Leaf,
    TrendingUp,
    UserCheck
} from "lucide-react";
const MasterProfessionnel = () => {
const programs = [
    {
        id: 1,
        title: "MASTER PROFESSIONNEL PSYCHOPRATICIEN",
        description: "Formation spécialisée en psychopratique permettant d'acquérir les compétences nécessaires pour accompagner les individus dans leur développement personnel et professionnel...",
        icon: <Brain className="w-8 h-8" />,
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Psychologie"
    },
    {
        id: 2,
        title: "MASTER PROFESSIONNEL COACH TOP MANAGEMENT",
        description: "Programme de formation avancée pour développer les compétences en coaching de dirigeants et de cadres supérieurs dans les organisations...",
        icon: <Users className="w-8 h-8" />,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Management"
    },
    {
        id: 3,
        title: "MASTER PROFESSIONNEL EXPERT COACH",
        description: "Formation d'excellence pour devenir expert en coaching professionnel avec une expertise approfondie dans l'accompagnement des individus et des équipes...",
        icon: <Award className="w-8 h-8" />,
        color: "from-gold-500 to-yellow-600",
        button: "from-amber-300 via-yellow-300 to-amber-500",
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-700",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Coaching"
    },
    {
        id: 4,
        title: "MASTER PROFESSIONNEL BANQUE PRIVÉE INTERNATIONALE",
        description: "Former des professionnels aptes à prendre en charge un portefeuille de clientèles haut de gamme. Leurs missions sont la gestion de patrimoine et le conseil en investissement...",
        icon: <Banknote className="w-8 h-8" />,
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        textColor: "text-green-700",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Finance"
    },
    {
        id: 5,
        title: "MASTER PROFESSIONNEL COMPTABILITÉ, CONTRÔLE DE GESTION, AUDIT",
        description: "Le Master, à finalité professionnelle, forme en deux années des spécialistes de la comptabilité, du contrôle de gestion et de l'audit dans les organisations modernes...",
        icon: <Calculator className="w-8 h-8" />,
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-700",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Finance"
    },
    {
        id: 6,
        title: "MASTER PROFESSIONNEL CHARGÉ D'AFFAIRES ENTREPRISES ET INSTITUTIONS",
        description: "Le Master Chargé d'affaires entreprises et institutions est un cursus entièrement échelonné sur deux années pour former des experts en relation client B2B...",
        icon: <Building2 className="w-8 h-8" />,
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        textColor: "text-teal-700",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Business"
    },
    {
        id: 7,
        title: "MASTER PROFESSIONNEL DÉCORATION D'INTÉRIEUR",
        description: "Le Master en Décoration intérieure se déroule en 2 ans (cours et ateliers / missions en entreprise) et s'adresse aux créatifs passionnés par l'aménagement d'espaces...",
        icon: <Palette className="w-8 h-8" />,
        color: "from-pink-500 to-rose-600",
        bgColor: "bg-pink-50",
        textColor: "text-pink-700",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Design"
    },
    {
        id: 8,
        title: "MASTER PROFESSIONNEL GÉNIE CIVIL - CONCEPTION, CONSTRUCTION, INGÉNIERIE DU BÂTIMENT",
        description: "Le parcours Conception Construction Ingénierie du Bâtiment prépare les étudiants aux métiers d'ingénierie du secteur du BTP et de la construction durable...",
        icon: <Construction className="w-8 h-8" />,
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Ingénierie"
    },
    {
    id: 9,
    title: "MASTER PROFESSIONNEL CYBERSÉCURITÉ ET MANAGEMENT DES RISQUES NUMÉRIQUES",
    description: "Formation d'expert en cybersécurité pour analyser, concevoir et mettre en œuvre des stratégies de protection des systèmes d'information. Expertise en audit sécuritaire, gestion de crise cyber et conformité réglementaire...",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Informatique"
},
{
    id: 10,
    title: "MASTER PROFESSIONNEL DÉVELOPPEMENT DURABLE ET TRANSITION ÉNERGÉTIQUE",
    description: "Programme spécialisé dans la gestion de projets environnementaux et la transition énergétique. Formation aux enjeux climatiques, économie verte, et pilotage de projets durables dans les organisations...",
    icon: <Leaf className="w-8 h-8" />,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Environnement"
},
{
    id: 11,
    title: "MASTER PROFESSIONNEL MARKETING DIGITAL ET E-BUSINESS",
    description: "Formation avancée en stratégies marketing digitales, transformation numérique et e-commerce. Expertise en data marketing, growth hacking, marketing automation et gestion d'écosystèmes digitaux...",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    textColor: "text-violet-700",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Marketing"
},
{
    id: 12,
    title: "MASTER PROFESSIONNEL RESSOURCES HUMAINES ET TRANSFORMATION DIGITALE",
    description: "Programme spécialisé en gestion des ressources humaines à l'ère numérique. Formation aux nouvelles pratiques RH, management à distance, SIRH, analytics RH et conduite du changement organisationnel...",
    icon: <UserCheck className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-700",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Ressources Humaines"
},
{
    id: 13,
    title: "MASTER PROFESSIONNEL INTELLIGENCE ARTIFICIELLE ET DATA SCIENCE",
    description: "Formation d'expert en intelligence artificielle et science des données. Maîtrise du machine learning, deep learning, big data analytics et développement de solutions IA pour l'entreprise et la recherche...",
    icon: <Brain className="w-8 h-8" />,
    color: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-50",
    textColor: "text-slate-700",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Intelligence Artificielle"
}
];

  const categories = ["Tous", "Psychologie", "Management", "Coaching", "Finance", "Business", "Design", "Ingénierie"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredPrograms = selectedCategory === "Tous" 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  return (
    <div className="min-h-screen">
    {/* Breadcrumb */}
    

    <div className="relative text-white py-20 overflow-hidden" style={{ 
        backgroundImage: 'linear-gradient(rgba(59, 7, 100, 0.9), rgba(76, 29, 149, 0.95)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        {/* Background Pattern with reduced opacity */}
        <div className="absolute inset-0 opacity-5"></div>
          {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full opacity-20 transform translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400 rounded-full opacity-15 transform -translate-x-48 translate-y-48"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Professionnel
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Des formations d'excellence de niveau BAC+5 pour développer une expertise métier approfondie et accéder aux postes à responsabilités
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{programs.length}</div>
              <div className="text-purple-200">Spécialités disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">BAC+5</div>
              <div className="text-purple-200">Niveau de qualification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2 ans</div>
              <div className="text-purple-200">Durée de formation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">92%</div>
              <div className="text-purple-200">Taux d'insertion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-violet-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <div
              key={program.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Card Header with Background Image */}
              <div className="relative h-56 overflow-hidden">
                {/* Background Image */}
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-75`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {program.category}
                  </div>
                </div>

                {/* Master Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-gold-400 to-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    BAC+5
                  </div>
                </div>
                
                {/* Content on top of image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center mb-3">
                    <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                      {program.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {program.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 ${program.bgColor} ${program.textColor} rounded-full text-xs font-medium`}>
                    Expertise avancée
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                    2 années
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                    Cadre supérieur
                  </span>
                </div>
                
{/* Action Buttons */}
{/* <div className="flex space-x-3">
  {program.button ? (
    <button className={`flex-1 bg-gradient-to-r ${program.button} text-white py-3 px-4 rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md`}>
      En savoir plus
    </button>
  ) : (
    <button className={`flex-1 bg-gradient-to-r ${program.color} text-white py-3 px-4 rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md`}>
      En savoir plus
    </button>
  )}
                  <button className="px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                    Programme
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Master Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir un Master Professionnel ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une formation d'excellence qui combine expertise académique et compétences professionnelles pour les futurs leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Diplôme d'Excellence",
                description: "Diplôme de niveau BAC+5 reconnu internationalement",
                color: "violet"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expertise Métier",
                description: "Développement d'une expertise approfondie dans votre domaine",
                color: "purple"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Leadership",
                description: "Formation aux compétences de management et de leadership",
                color: "indigo"
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Réseau Professionnel",
                description: "Accès à un réseau d'alumni et de professionnels reconnus",
                color: "blue"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}-100 text-${feature.color}-600 rounded-full mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conditions d'Admission
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les prérequis pour intégrer nos formations Master
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Niveau requis</h3>
              <p className="text-gray-600">Licence ou équivalent BAC+3 validé</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dossier</h3>
              <p className="text-gray-600">Constitution d'un dossier de candidature complet</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entretien</h3>
              <p className="text-gray-600">Entretien de motivation avec le jury d'admission</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 " style={{ backgroundImage: `linear-gradient(rgba(72, 71, 70, 0.7), rgba(16,24,40,255)), url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)` , backgroundSize: 'cover' , backgroundPosition: 'center'  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Rejoignez l'élite de votre secteur
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Nos Masters Professionnels vous ouvrent les portes des postes à haute responsabilité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/authentification">
              <button className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Candidater maintenant
              </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
                Documentation complète
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterProfessionnel;