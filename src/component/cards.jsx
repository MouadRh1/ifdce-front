import React from 'react';

export default function Cards() {
    const posts = [
        {
            title: "Activités principales",
            desc: "Formations diplômantes : technicien et TS, Licences et Masters professionnels 100% en ligne - Validation des acquis de l'expérience : accompagnement personnalisé - Formations certifiantes dans divers domaines : droit, économie, management, informatique, infographie, etc. - Conseil en ingénierie de formation et accompagnement des entreprises",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "javascript:void(0)",
            note: "MBA:"
        },
        {
            title: "Pourquoi choisir IFDCE ?",
            desc: "Diplômes français (T,TS, licence, master, MBA, Doctorat) Formations flexibles et en ligne Accompagnement sur mesure Reconnaissance européenne. La vraie question, c'est : qu'est-ce que vous attendez ?",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "javascript:void(0)"
        },
        {
            title: "Reconnaissance et Partenariat",
            desc: "Les diplômes sont délivrés en partenariat avec des organismes français et anglais. Tous les parcours sont alignés sur les standards européens, avec une reconnaissance en France et dans l'Union Européenne.",
            img: "https://img.freepik.com/photos-premium/etiquette-connexion-affaires-png-fond-transparent-bordure-blanche_53876-942175.jpg?w=2000",
            href: "javascript:void(0)"
        },
        {
            title: "Public Cible",
            desc: "Nos formations et dispositifs s'adressent aux : - Professionnels en activité - Demandeurs d'emploi - Cadres et techniciens souhaitant évoluer - Personnes en reconversion - Étudiants cherchant une alternative flexible.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "javascript:void(0)"
        }
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-gray-800 text-4xl font-extrabold sm:text-5xl mb-4">
                        Présentation Institutionnelle – IFDCE
                    </h1>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Institut de Formation, de Développement de Compétences et d'Excellence
                    </p>
                </div>

                {/* Featured Card - Activités principales */}
                <div className="mb-16">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img 
                                    src={posts[0].img} 
                                    alt={posts[0].title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12">
                                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                                    Nos Services
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    {posts[0].title}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {posts[0].desc}
                                </p>
                                {/* {posts[0].note && (     // <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    //     <p className="text-yellow-800 font-medium">{posts[0].note}</p>
                                    // </div>
                               
                                )} */}
                                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                                    En savoir plus
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Cards */}
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(1).map((item, key) => (
                        <li className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" key={key + 1}>
                            <a href={item.href} className="block">
                                <div className="relative">
                                    <img 
                                        src={item.img} 
                                        loading="lazy" 
                                        alt={item.title} 
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed line-clamp-4">
                                        {item.desc}
                                    </p>
                                    <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                                        Lire la suite
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}