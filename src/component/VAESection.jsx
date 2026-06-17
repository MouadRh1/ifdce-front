// src/component/VAESection.jsx
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Clock, GraduationCap, ArrowRight, Star, Users, FileText } from 'lucide-react';

export default function VAESection() {
  const vaeDiplomas = [
    "Technicien",
    "Technicien Spécialisé",
    "Licence Professionnelle",
    "Master Professionnel",
    "Doctorat Professionnel",
    "MPI (Master Professionnel International)",
    "DBA (Doctorate of Business Administration)"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Validation des Acquis de l'Expérience
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformez votre expérience en diplôme
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              La <strong>Validation des Acquis de l'Expérience (VAE)</strong> vous permet d'obtenir un diplôme officiel 
              en faisant reconnaître vos compétences professionnelles acquises au cours de votre carrière. 
              Sans reprendre les études, valorisez votre expérience et accédez à de nouvelles opportunités.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                "Diplôme reconnu par l'État",
                "Accompagnement personnalisé à chaque étape",
                "Processus rapide et efficace",
                "7 diplômes accessibles : du Technicien au Doctorat",
                "Valorisation de votre expérience professionnelle"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/validation-acquis-experience">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                  En savoir plus sur la VAE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/vae/demande">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Faire une demande VAE
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Diplômes et Stats */}
          <div className="space-y-6">
            {/* Diplômes accessibles */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Diplômes accessibles par VAE
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {vaeDiplomas.map((diploma, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{diploma}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-gray-600 text-sm">Diplômes accessibles</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Accompagnement personnalisé</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">48h</div>
                <div className="text-gray-600 text-sm">Délai de réponse</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Domaines couverts</div>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm italic text-blue-100">
                    "La VAE m'a permis d'obtenir mon Master Professionnel en valorisant 15 ans d'expérience. 
                    Un processus fluide et un accompagnement exceptionnel."
                  </p>
                  <p className="text-sm font-semibold mt-2 text-white">— Karim B., Chef de projet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}