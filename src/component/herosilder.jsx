import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, BookOpen, Users } from 'lucide-react';
import videoBackground from '../assets/istockphoto-1539130562-640_adpp_is.mp4';
import '../tailwind.css'; // Import the CSS file

export default function ImageSlider() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    "Transformez Votre Expérience en Diplôme",
    "Valorisez Vos Compétences Professionnelles",
    "Obtenez Une Reconnaissance Académique",
    "Accélérez Votre Évolution de Carrière"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='h-screen relative flex items-center justify-center overflow-hidden'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover scale-105'
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Professional Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-800/90'></div>
      
      {/* Geometric Pattern Overlay */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45'></div>
        <div className='absolute bottom-32 right-32 w-24 h-24 border border-blue-300/30 rotate-12'></div>
        <div className='absolute top-1/2 left-10 w-16 h-16 border border-white/15 -rotate-45'></div>
      </div>

      {/* Main Content */}
      <div className='z-10 text-center px-6 max-w-6xl mx-auto w-full hero-content'>
        {/* Institution Badge */}
        <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 transform transition-all duration-1000 hero-badge ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          <Award className="w-5 h-5 text-blue-400" />
          <span className="text-white font-medium">
            Institut de Formation et Développement des Compétences
          </span>
        </div>

        {/* Dynamic Main Heading */}
        <h1 className={`text-7xl font-bold mb-6 leading-tight text-white transform transition-all duration-1000 delay-200 hero-title ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="block mb-4">
            {rotatingTexts[currentTextIndex].split(' ').slice(0, -2).join(' ')}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-pulse">
            {rotatingTexts[currentTextIndex].split(' ').slice(-2).join(' ')}
          </span>
        </h1>

        {/* Professional Subtitle */}
        <p className={`text-2xl text-slate-200 mb-12 font-light max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 hero-subtitle ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          Rejoignez l'excellence académique et transformez votre parcours professionnel en qualification reconnue.
          <span className="text-blue-300 font-medium"> L'IFDCE vous accompagne vers la réussite.</span>
        </p>

        {/* Feature Highlights */}
        <div className={`grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 delay-700 hero-features ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          <div className="flex items-center gap-3 text-white/90">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <span className="font-medium">Programmes Certifiés</span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <Users className="w-6 h-6 text-blue-400" />
            <span className="font-medium">Accompagnement Personnalisé</span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <Award className="w-6 h-6 text-blue-400" />
            <span className="font-medium">Reconnaissance Officielle</span>
          </div>
        </div>
        
        {/* Premium CTA Buttons */}
        <div className={`flex gap-6 justify-center items-center transform transition-all duration-1000 delay-1000 hero-buttons ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          <Link to="/authentification">
            <div className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/30 border border-blue-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-2">
                Découvrir nos Programmes
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
          
          <Link to="/VAEPage">
            <div className="group relative border-2 border-white/40 text-white hover:text-blue-900 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl backdrop-blur-md hover:backdrop-blur-lg overflow-hidden">
              <div className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              <span className="relative z-10 flex items-center gap-2">
                Validation des Acquis (VAE)
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};