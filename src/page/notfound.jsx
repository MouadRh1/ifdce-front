// src/pages/notfound.jsx
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, FileQuestion } from 'lucide-react';
import SEO from '../component/SEO';

export default function Notfound() {
  return (
    <>
      <SEO 
        title="Page non trouvée - 404 | IFDCE Maroc"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez toutes nos formations et la Validation des Acquis de l'Expérience (VAE) sur IFDCE Maroc."
        keywords="404, page non trouvée, erreur, IFDCE, VAE Maroc, formations"
        url="https://ifdce.ma/404"
      />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Code 404 */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-extrabold text-gray-200 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FileQuestion className="w-20 h-20 md:w-24 md:h-24 text-blue-500 opacity-50" />
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-blue-600" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas, a été déplacée ou a été supprimée.
          </p>

          {/* Suggestions */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-600" />
              Vous cherchez peut-être :
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/validation-acquis-experience" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Validation des Acquis de l'Expérience (VAE)
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Toutes nos formations
                </Link>
              </li>
              <li>
                <Link to="/LicenceProfessionnelle" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Licences Professionnelles
                </Link>
              </li>
              <li>
                <Link to="/MasterProfessionnel" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Masters Professionnels
                </Link>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </button>
          </div>

          {/* Footer */}
          <p className="mt-8 text-sm text-gray-400">
            Erreur 404 · Si le problème persiste, <Link to="/contact" className="text-blue-600 hover:underline">contactez-nous</Link>
          </p>
        </div>
      </main>
    </>
  );
}