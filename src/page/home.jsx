// src/pages/Home.jsx
import React from 'react';
import SEO from '../component/SEO';
import HeroSlider from '../component/herosilder';
import Presentation from '../component/presentation';
import Stats from '../component/stats';
import Partener from '../component/partener';
import Presentation2 from '../component/presentation2';
import AdditionalInfo from '../component/AdditionalInfo';
import FeaturedFormations from '../component/FeaturedFormations';
import VAESection from '../component/VAESection'; // Nouveau composant VAE

export default function Home() {
  return (
    <>
      {/* SEO optimisé pour VAE */}
      <SEO 
        isHomePage={true}
        title="IFDCE - Formation professionnelle et VAE au Maroc | Validation des Acquis de l'Expérience"
        description="IFDCE Maroc propose la Validation des Acquis de l'Expérience (VAE) et des formations hybrides diplômantes en Géomatique, Génie Civil. Obtenez votre diplôme par l'expérience avec un accompagnement personnalisé."
        keywords="IFDCE Maroc, formation hybride Maroc, VAE Maroc, Validation des Acquis de l'Expérience, Licence Géomatique, Master Génie Civil, reconnaissance compétences, diplôme par l'expérience"
        url="https://ifdce.ma/"
        image="https://ifdce.ma/assets/home-og-image.jpg"
      />
      
      <HeroSlider/>
      
      {/* Section VAE mise en avant sur la page d'accueil */}
      <VAESection />
      
      {/* Section des 4 formations phares */}
      <FeaturedFormations/>
      
      <Partener/>
      <Presentation2/>
      <Presentation/>
      <Stats/>
      <AdditionalInfo/>
    </>
  );
}