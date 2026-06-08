import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqsList = [
        {
            q: "Pourquoi choisir IFDCE ?",
            a: "Diplômes français (T, TS, licence, master, MBA, Doctorat) - Formations flexibles et en ligne - Formations en présentiel également disponibles - Accompagnement sur mesure - Reconnaissance européenne. La vraie question, c'est : qu'est-ce que vous attendez ?"
        },
        {
            q: "Vous ne savez pas si vous êtes éligible à la VAE ?",
            a: "Prenez un rendez-vous gratuit avec nos conseillers. Ils évalueront votre profil et vous guideront étape par étape. Lien dans la bio ou en message privé."
        },
        {
            q: "Pour qui ?",
            a: "Vous êtes salarié, demandeur d'emploi, entrepreneur, ou sans diplôme ? IFDCE s'adresse à vous. Notre accompagnement s'adapte à votre emploi du temps, vos besoins, vos ambitions. #AccessibleÀTous #VAEPourTous"
        },
        {
            q: "Formation ou VAE ?",
            a: "Quelle est la différence entre une formation diplômante et une VAE ? La formation, c'est apprendre de nouvelles compétences. La VAE, c'est faire reconnaître ce que vous savez déjà. Et parfois, les deux se combinent !"
        },
        {
            q: "Quelles sont les étapes de la VAE ?",
            a: "Étude gratuite de votre dossier - Constitution du livret d'expérience - Soutenance devant un jury - Obtention de votre diplôme français reconnu. Nous sommes à vos côtés à chaque étape."
        },
        {
            q: "Vous avez quitté les études trop tôt ?",
            a: "Vous travaillez depuis des années sans diplôme officiel ? Avec IFDCE, vous pouvez reprendre le contrôle. ✔ Étude gratuite de votre dossier ✔ Accompagnement sur mesure"
        },        
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Questions fréquemment posées
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Nous avons répondu à toutes les questions fréquemment posées. Toujours confus ? N'hésitez pas à nous contacter.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqsList.map((item, idx) => (
                        <div 
                            key={idx}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                            >
                                <h4 className="text-lg font-semibold text-gray-800 pr-4">
                                    {item.q}
                                </h4>
                                <ChevronDown 
                                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 flex-shrink-0 ${
                                        activeIndex === idx ? 'transform rotate-180' : ''
                                    }`}
                                />
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ${
                                activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/contact">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                        Nous contacter pour plus d'informations
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}