import { Link } from 'react-router-dom';
// import React from 'react';

export default function Stats() {
    const stats = [
       {
          data: "25+",
          title: "DOSSIERS TRAITÉS"
       },
       {
          data: "12",
          title: "ÉCOLES PARTENAIRES"
       },
       {
          data: "50+",
          title: "ÉTUDIANTS INSCRITS"
       },
       {
          data: "5",
          title: "PAYS REPRÉSENTÉS"
       },
    ]
    
    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Et si votre expérience valait un diplôme ?
                    </h3>
                    <p className="mt-3 text-lg">
                        Chez IFDC, vous pouvez obtenir une licence ou un master reconnu grâce à la Validation des Acquis de l'Expérience. 
                        Votre parcours professionnel devient votre plus grande force.
                    </p>
                    <Link to="Contact" className="inline-block">
                        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Savoir plus
                        </button>
                    </Link>
                </div>
                {/* <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {stats.map((item, idx) => (
                            <li key={idx} className="text-center px-12 md:px-16">
                                <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>
        </section>
    );
}