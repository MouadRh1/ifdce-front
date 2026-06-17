// src/component/partener.jsx
import React from 'react'; 
import logodeisgn from '../assets/logodesign.png';
import logomicrosoft from '../assets/logomicrosoft.png';
import imagesesgt from '../assets/imagesesgt.png';
import imagesESEJE from '../assets/imagesESEJE.png';
import logoiisga from '../assets/logoiisga.png'; 
import logoIPFOPS from '../assets/logoIPFOPS.png';
// NOUVEAUX IMPORT DES PARTENAIRES
import logoEISETP from '../assets/eiestpLogo.png';
import logoFIEP from '../assets/fiepLofo.png';
import logoINTIGroupe from '../assets/groupeInti.png';
import logoINTIUniversite from '../assets/universInti.png';
import logoWekerle from '../assets/wekerlyLogo.png';

export default function Partener() {
  const partenaires = [
    // Partenaires existants
    { id: 1, logo: imagesesgt, nom: 'SESGT' },
    { id: 2, logo: imagesESEJE, nom: 'ESEJE' },
    { id: 3, logo: logoiisga, nom: 'IISGA' },
    { id: 4, logo: logoIPFOPS, nom: 'IPFOPS' },
    // NOUVEAUX PARTENAIRES
    { id: 7, logo: logoEISETP, nom: 'EIESTP' },
    { id: 8, logo: logoFIEP, nom: 'FIEP' },
    { id: 9, logo: logoINTIGroupe, nom: 'Groupe INTI' },
    { id: 10, logo: logoINTIUniversite, nom: 'Université INTI' },
    { id: 11, logo: logoWekerle, nom: 'Wekerle Business School' },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Nos partenaires
          </h3>
          <p className="mt-3 text-gray-600">
            Nous collaborons avec des entreprises et des institutions de renommée mondiale pour offrir des opportunités d'apprentissage exceptionnelles.
          </p>
        </div>
        <div className="mt-5">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {partenaires.map((partenaire) => (
              <li key={partenaire.id} className="flex-none w-32">
                <img 
                  src={partenaire.logo} 
                  alt={partenaire.nom} 
                  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  title={partenaire.nom}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}