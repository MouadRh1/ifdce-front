import React from 'react';

import { BookOpen, Building2, Users, PenTool, Monitor , Truck, Hotel } from 'lucide-react';
import { 
 
  Settings, 
  Wifi, 
  HardHat, 
  Zap, 
  CircuitBoard 
} from "lucide-react";
import { href } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";

const Technicien = () => {
  const programs = [
    {
      id: 1,
      title: "Technicien Aide Comptable",
      description: "Le Programme d'aide comptable va à l'essentiel des compétences à maîtriser. Il se concentre sur la comptabilité générale, les opérations courantes et opérations d'inventaires...",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      image: "https://fiep-education.fr/assets/IMG/technicien/aide%20comptable/3170.jpg"
    },
    {
      id: 2,
      title: "Chef de chantiers travaux publics",
      description: "Le \"Technicien Chef de Chantier TP\" a pour mission d'encadrer une ou plusieurs équipes de 15 à 20 personnes, qui sont orchestrées par des chefs d'équipe, et disposant de quelques engins mécaniques (Bétonnières, monte-charge, etc.).",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://th.bing.com/th/id/OIP.ZjiScRufl2sIZ3UADhSWRAHaE8?w=235&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 3,
      title: "TECHNICIEN COMMERCIAL",
      description: "Le programme de formation commerciale intègrent les nouveaux enjeux concernant le métier commercial afin de faciliter le déploiement des nouvelles approches du client permettant d'optimiser la performance commerciale en synchronisant...",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Dessinateur de bâtiment",
      description: "A l'issue de la formation, le lauréat de formation est capable de réaliser les opérations et les activités suivantes...",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Technicien en informatique",
      description: "Le programme Informatique de gestion vise à former des personnes aptes à exercer la profession de programmeur-analyste dans le domaine de la gestion. Dans l'exercice de sa profession, le programmeur-analyste...",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
      {
      id: 6,
      title: "Technicien Logistique",
      description: "Le Technicien en Logistique est chargé des opérations de réception, de mise en stock, de préparation des commandes et d'expédition des marchandises...",
      icon: <Truck className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Technicien Réception d'hôtel",
      description: "Conçue sous forme modulaire, cette formation prépare aux diverses carrières dans plusieurs secteurs d'activités, principalement le tourisme...",
      icon: <Hotel className="w-8 h-8" />,
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
  id: 8,
  title: "Technicien en Maintenance Industrielle",
  description: "Formation complète en maintenance préventive et corrective des équipements industriels. Maîtrise des techniques de diagnostic, réparation et optimisation des machines de production.",
  icon: <Settings className="w-8 h-8" />,
  color: "from-green-500 to-green-600",
  bgColor: "bg-green-50",
  textColor: "text-green-700",
  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
},
{
  id: 9,
  title: "Technicien Réseaux et Télécommunications",
  description: "Spécialisation dans l'installation, la configuration et la maintenance des réseaux informatiques et systèmes de télécommunications. Compétences en sécurité réseau et administration système.",
  icon: <Wifi className="w-8 h-8" />,
  color: "from-purple-500 to-purple-600",
  bgColor: "bg-purple-50",
  textColor: "text-purple-700",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
},
{
  id: 10,
  title: "Technicien en Génie Civil",
  description: "Formation aux techniques de construction, étude de sols, calcul de structures et gestion de projets BTP. Expertise en lecture de plans et contrôle qualité des ouvrages.",
  icon: <HardHat className="w-8 h-8" />,
  color: "from-yellow-500 to-yellow-600",
  bgColor: "bg-yellow-50",
  textColor: "text-yellow-700",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
},
{
  id: 11,
  title: "Technicien en Énergies Renouvelables",
  description: "Spécialiste de l'installation et maintenance des systèmes solaires, éoliens et autres technologies vertes. Formation aux normes environnementales et efficacité énergétique.",
  icon: <Zap className="w-8 h-8" />,
  color: "from-emerald-500 to-emerald-600",
  bgColor: "bg-emerald-50",
  textColor: "text-emerald-700",
  image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop"
},
{
  id: 12,
  title: "Technicien en Électronique Industrielle",
  description: "Maîtrise des systèmes électroniques industriels, automatismes et programmation d'automates. Compétences en diagnostic de pannes et optimisation des processus automatisés.",
  icon: <CircuitBoard className="w-8 h-8" />,
  color: "from-indigo-500 to-indigo-600",
  bgColor: "bg-indigo-50",
  textColor: "text-indigo-700",
  image: "https://images.pexels.com/photos/32588544/pexels-photo-32588544.jpeg"
},
];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Formation Technicien
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes de formation pour devenir technicien dans différents domaines professionnels
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header with Background Image */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Image */}
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-70`}></div>
                
                {/* Content on top of image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center mb-3">
                    <div className="inline-flex p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                   <Link
                                                     to="/techaidecomptable">
                  <button className={`flex-1 bg-gradient-to-r ${program.color} text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105`}>
                    En savoir plus
                  </button>
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                    Brochure
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-gradient-to-r group-hover:${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à commencer votre formation ?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Contactez-nous pour plus d'informations sur nos programmes de formation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" >
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                  Nous contacter
                </button>
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
                  Télécharger la brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technicien;