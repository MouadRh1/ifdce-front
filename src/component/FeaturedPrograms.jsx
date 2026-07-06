// src/component/FeaturedPrograms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, HardHat, GraduationCap, MapPin, Clock, Monitor, ChevronRight } from 'lucide-react';

const featuredPrograms = [
    {
        id: 1,
        title: "Licence Professionnelle en Géomatique et Ingénierie Topographique",
        type: "Licence Pro",
        level: "BAC+3",
        duration: "1 an",
        mode: "Hybride",
        icon: <Globe className="w-6 h-6" />,
        color: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-50",
        textColor: "text-cyan-700",
        link: "/formations/licence-geomatique",
        description: "Maîtrisez les technologies géospatiales et la topographie de précision"
    },
    {
        id: 2,
        title: "Licence Professionnelle en Génie Civil et Ingénierie Topographique",
        type: "Licence Pro",
        level: "BAC+3",
        duration: "1 an",
        mode: "Hybride",
        icon: <HardHat className="w-6 h-6" />,
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        link: "/formations/licence-genie-civil",
        description: "Conception et gestion de projets d'infrastructure et topographie"
    },
    {
        id: 3,
        title: "Master Professionnel en Géomatique et Ingénierie Topographique",
        type: "Master Pro",
        level: "BAC+5",
        duration: "2 ans",
        mode: "Hybride",
        icon: <Globe className="w-6 h-6" />,
        color: "from-purple-500 to-violet-600",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        link: "/formations/master-geomatique",
        description: "Expertise avancée en systèmes d'information géographique"
    },
    {
        id: 4,
        title: "Master Professionnel en Génie Civil et Ingénierie Topographique",
        type: "Master Pro",
        level: "BAC+5",
        duration: "2 ans",
        mode: "Hybride",
        icon: <HardHat className="w-6 h-6" />,
        color: "from-amber-500 to-orange-600",
        bgColor: "bg-amber-50",
        textColor: "text-amber-700",
        link: "/formations/master-genie-civil",
        description: "Management de projets d'ingénierie civile et topographique"
    }
];

export default function FeaturedPrograms() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <GraduationCap className="w-4 h-4" />
                        Formations prioritaires
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos formations professionnelles
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Des formations en mode hybride (présentiel et distanciel)
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredPrograms.map((program) => (
                        <div
                            key={program.id}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                        >
                            {/* Card Header */}
                            <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                                            {program.icon}
                                        </div>
                                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                                            {program.type}
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                        {program.level}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 text-xs mb-4 line-clamp-2 min-h-[32px]">
                                    {program.description}
                                </p>

                                {/* Meta */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                                        <Clock className="w-3 h-3" />
                                        {program.duration}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                                        <Monitor className="w-3 h-3" />
                                        {program.mode}
                                    </span>
                                </div>

                                <Link
                                    to={program.link}
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group-hover:gap-2"
                                >
                                    Découvrir
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        to="/formations"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    >
                        Voir toutes nos formations
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}