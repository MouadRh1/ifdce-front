import React from 'react';
import { Database, Calculator, Briefcase, FileText, Building, Home, GraduationCap } from 'lucide-react';
import studentimage9 from '../assets/pexels-pixabay-159213.jpg'
import { Link } from 'react-router-dom';

const LicenceProfessionnelle = () => {
  const programs = [
    {
      id: 1,
      title: "Licence Professionnelle Administration de Base de Donnée & Technologies WEB",
      description: "L'objectif de cette licence professionnelle est la formation de développeurs spécialistes des nouvelles technologies de construction d'applications mobiles...",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Technologie"
    },
    {
      id: 2,
      title: "Licence Professionnelle Comptabilité, Finance, Audit",
      description: "Cette formation a pour objectifs de former des compétences capables de participer au Management des Organisations dans les domaines comptables et financiers et de maîtriser les Techniques du contrôle, de la Finance et d'Audit...",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Finance"
    },
    {
      id: 3,
      title: "LICENCE PROFESSIONNELLE GESTION DES ENTREPRISES",
      description: "La licence Gestion des entreprises est une formation à la fois délibérément généraliste et résolument tournée vers le monde professionnel...",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Management"
    },
    {
      id: 4,
      title: "LICENCE PROFESSIONNELLE MÉTIERS DU NOTARIAT",
      description: "Pendant la licence professionnelle en entrepreneuriat, les étudiants sont formés à la création et à la gestion d'une entreprise, et d'un produit. Ainsi qu'à la gestion des problématiques rencontrées lors du management des projets.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Juridique"
    },
    {
      id: 5,
      title: "Licence Professionnelle Génie Civil",
      description: "Cette formation permettra aux étudiants d'acquérir les compétences suivantes : Connaissance des différents types de matériaux de construction. Acquisition des techniques principales utilisées dans la construction.",
      icon: <Building className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Ingénierie"
    }
  ];

  const categories = ["Tous", "Technologie", "Finance", "Management", "Juridique", "Ingénierie"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredPrograms = selectedCategory === "Tous" 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  return (
    <div className="min-h-screen ">
      {/* Breadcrumb */}
      

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(69, 8, 100, 0.9), rgba(76, 39, 249, 0.95)), url(https://media.licdn.com/dms/image/v2/D4D12AQEWnOOfdSy2-w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677067555419?e=2147483647&v=beta&t=V12o948qiDfzRrl0oTtz4WaVGrNpOBHFs1feuru-Tsg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full opacity-20 transform translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-950 rounded-full opacity-15 transform -translate-x-48 translate-y-48"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Licence Professionnelle
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Des formations universitaires professionnalisantes pour développer une expertise métier et accéder rapidement au marché du travail
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-blue-200">Spécialités disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">BAC+3</div>
              <div className="text-blue-200">Niveau de qualification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-200">Taux d'insertion</div>
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
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
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

                {/* License Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    BAC+3
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
                    Professionnalisant
                  </span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium">
                    Stage inclus
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                    Insertion rapide
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {/* <button className={`flex-1 bg-gradient-to-r ${program.color} text-white py-3 px-4 rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md`}>
                    En savoir plus
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                    Programme
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose License Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir une Licence Professionnelle ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une formation universitaire qui combine théorie et pratique pour une insertion professionnelle réussie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Diplôme reconnu",
                description: "Diplôme de niveau BAC+3 reconnu par l'État",
                color: "blue"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Insertion rapide",
                description: "85% des diplômés trouvent un emploi dans les 6 mois",
                color: "green"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Partenariats entreprises",
                description: "Stages et projets avec des entreprises partenaires",
                color: "purple"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Formation pratique",
                description: "50% du temps consacré aux projets professionnels",
                color: "orange"
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 " style={{ backgroundImage: `linear-gradient(rgba(72, 71, 70, 0.7), rgba(16,24,40,255)), url(${studentimage9})` , backgroundSize: 'cover' , backgroundPosition: 'center'  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à donner un nouvel élan à votre carrière ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Découvrez nos licences professionnelles et choisissez la formation qui correspond à vos ambitions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/authentification">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Candidater maintenant
              </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Télécharger la brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenceProfessionnelle;