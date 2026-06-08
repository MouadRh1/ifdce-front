import React, { useState } from 'react';
import { 
  Home, 
  Award, 
  CheckCircle, 
  Users, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  User, 
  Globe, 
  MessageCircle,
  FileText,
  Target,
  Briefcase,
  GraduationCap,
  Star,
  ArrowRight
} from 'lucide-react';
import { div } from 'framer-motion/client';

const VAEPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Valoriser vos connaissances",
      description: "Valoriser vos connaissances et compétences acquises de l'expérience"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reconnaissance officielle",
      description: "Faire reconnaître officiellement vos compétences par l'obtention d'un diplôme universitaire"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Augmenter votre niveau",
      description: "Augmenter votre niveau de formation tout en maintenant votre emploi"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Améliorer l'employabilité",
      description: "Augmenter votre employabilité"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Compétitivité",
      description: "Affirmer votre compétitivité sur le marché de l'emploi"
    }
  ];

  const accompanimentServices = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      service: "Des entretiens individuels"
    },
    {
      icon: <Users className="w-5 h-5" />,
      service: "Des ateliers méthodologiques collectifs"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      service: "Un suivi à distance"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      service: "Une aide à la construction du dossier de validation et une préparation au passage devant un jury"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      service: "Un accompagnement allant jusqu'à 24 heures"
    },
    {
      icon: <User className="w-5 h-5" />,
      service: "Un accompagnateur référent tout au long de la démarche"
    }
  ];

  const domains = [
    "Arts, lettres et langues",
    "Droit, économie, gestion",
    "Métiers de l'enseignement",
    "Sciences humaines et sociales",
    "Sciences, technologies et sciences de l'ingénieur",
    "Santé & Sport"
  ];

  const diplomas = [
    "DUT",
    "Licences professionnelles",
    "Masters",
    "Diplômes d'ingénieurs",
    "Doctorats",
    "DBA",
    "MBA"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {/* <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Accueil</span>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">VAE</span>
          </nav>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full opacity-15 transform -translate-x-40 translate-y-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Validation des Acquis</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                VAE
                <span className="block text-2xl md:text-3xl text-purple-200 font-normal mt-2">
                  Validation des Acquis de l'Expérience
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Transformez votre expérience professionnelle en diplôme reconnu. 
                Obtenez une certification officielle grâce à vos compétences acquises sur le terrain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                  Commencer ma VAE
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                  En savoir plus
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="VAE"
                className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Reconnaissance officielle
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
              { id: 'overview', label: 'Qu\'est-ce que la VAE ?', icon: BookOpen },
              { id: 'benefits', label: 'Avantages', icon: TrendingUp },
              { id: 'support', label: 'Accompagnement', icon: Users },
              { id: 'eligibility', label: 'Éligibilité', icon: CheckCircle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
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
            {/* Definition */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Qu'est-ce que la VAE ?</h2>
              </div>
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p className="text-lg mb-6">
                  Ce dispositif permet l'obtention de tout ou partie d'une certification (diplôme, titre à finalité professionnelle ou certificat de qualification professionnelle) sur la base d'une expérience professionnelle salariée, non salariée (commerçant, collaborateur de commerçant, profession libérale, agriculteur ou artisan...) et/ou bénévole (syndicale, associative) et/ou volontaire.
                </p>
                <p className="text-lg mb-6">
                  Cette expérience, en lien direct avec la certification visée, est validée par un jury.
                </p>
                <p className="text-lg">
                  Nous vous informons sur la procédure VAE pour tous les diplômes de FIEP : <strong>DUT, licences professionnelles, masters, diplômes d'ingénieurs, doctorats, DBA, MBA</strong>
                </p>
              </div>
            </div>

            {/* Domains and Diplomas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Domains */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                  Domaines disponibles
                </h3>
                <div className="space-y-3">
                  {domains.map((domain, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diplomas */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  Diplômes accessibles
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {diplomas.map((diploma, index) => (
                    <div key={index} className="bg-purple-50 text-purple-700 text-center py-3 px-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors duration-200">
                      {diploma}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mr-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">La VAE vous permet de :</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mr-4">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Un accompagnement personnalisé</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accompanimentServices.map((service, index) => (
                <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{service.service}</p>
                  </div>
                </div> 
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="font-semibold text-gray-900">Accompagnement complet</h3>
              </div>
              <p className="text-gray-700">
                Notre équipe vous accompagne tout au long de votre démarche VAE avec un suivi personnalisé 
                pouvant aller jusqu'à 24 heures d'accompagnement avec un référent dédié.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'eligibility' && (
          <div className="space-y-8">
            {/* Who */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mr-4">
                  <User className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pour qui ?</h2>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <p className="text-green-800 text-lg leading-relaxed">
                  <strong>Toute personne</strong>, ayant <strong>1 an d'activité</strong> en relation directe avec le contenu du diplôme visé 
                  <strong> sans condition d'âge, de nationalité, de statut, de diplôme</strong>, peut entamer une démarche VAE.
                </p>
              </div>
            </div>

            {/* What Experience */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pour quelle expérience ?</h2>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">
                Sont prises en considération pour la validation :
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Activités salariées et non salariées</h3>
                    <p className="text-gray-600">Libérales, artisanales, commerciales, agricoles...</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Activités extraprofessionnelles</h3>
                    <p className="text-gray-600">Bénévoles, personnelles, électives...</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Périodes de formation</h3>
                    <p className="text-gray-600">Formation initiale ou continue en milieu professionnel (continues ou non)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-900">Dimension internationale</span>
                </div>
                <p className="text-blue-800">
                  Les activités peuvent avoir été exercées <strong>en France ou à l'étranger</strong>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à valoriser votre expérience ?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Transformez vos années d'expérience en diplôme reconnu. 
              Nos conseillers vous accompagnent dans votre démarche VAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Prendre rendez-vous
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                Télécharger le guide VAE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VAEPage;