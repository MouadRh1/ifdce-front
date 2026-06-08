import React from 'react'; 
import logodeisgn from '../assets/logodesign.png';
import logomicrosoft from '../assets/logomicrosoft.png';
import imagesesgt from '../assets/imagesesgt.png';
import imagesESEJE from '../assets/imagesESEJE.png';
import logoiisga from '../assets/logoiisga.png'; 
import logoIPFOPS from '../assets/logoIPFOPS.png';
export default function Partener() {

     const partenaires = [
  { id: 1, logo: imagesesgt, nom: 'Partenaire A' },
  { id: 2, logo: imagesESEJE, nom: 'Partenaire B' },
 { id: 3, logo: logoiisga, nom: 'Partenaire c' },
 { id: 4, logo: logoIPFOPS, nom: 'Partenaire d' },
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
                        {
                             partenaires.map((partenaire) => (
                            <li key={partenaire.id} className="flex-none w-32">
                           <img src={partenaire.logo} alt={partenaire.nom} />
                             </li>
                              ))
                       }
                    </ul>
                </div>

                
            </div>
        </section>
    )}