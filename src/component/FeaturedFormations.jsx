// src/component/FeaturedFormations.jsx
import { Link } from 'react-router-dom';
import {
  Globe,
  HardHat,
  BarChart2,
  Building2,
  Clock,
  Monitor,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const featuredFormations = [
  {
    id: 1,
    title: "Licence Professionnelle en Géomatique et Ingénierie Topographique",
    type: "Licence Pro",
    level: "licence",
    duration: "1 an",
    mode: "Hybride",
    Icon: Globe,
    slug: "licence-geomatique",
    description: "Maîtrisez les technologies géospatiales et la topographie de précision",
  },
  {
    id: 2,
    title: "Licence Professionnelle en Génie Civil et Ingénierie Topographique",
    type: "Licence Pro",
    level: "licence",
    duration: "1 an",
    mode: "Hybride",
    Icon: HardHat,
    slug: "licence-genie-civil",
    description: "Conception et gestion de projets d'infrastructure et topographie",
  },
  {
    id: 3,
    title: "Master Professionnel en Géomatique et Ingénierie Topographique",
    type: "Master Pro",
    level: "master",
    duration: "2 ans",
    mode: "Hybride",
    Icon: BarChart2,
    slug: "master-geomatique",
    description: "Expertise avancée en systèmes d'information géographique",
  },
  {
    id: 4,
    title: "Master Professionnel en Génie Civil et Ingénierie Topographique",
    type: "Master Pro",
    level: "master",
    duration: "2 ans",
    mode: "Hybride",
    Icon: Building2,
    slug: "master-genie-civil",
    description: "Management de projets d'ingénierie civile et topographique",
  },
];

const topStyles = {
  licence: "bg-gradient-to-br from-blue-700 to-blue-500",
  master:  "bg-gradient-to-br from-slate-900 to-slate-700",
};

export default function FeaturedFormations() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Nos formations professionnelles
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            En mode hybride
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {featuredFormations.map(({ id, title, type, level, duration, mode, Icon, slug, description }) => (
            <div
              key={id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col
                         transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)]"
            >
              {/* Card top */}
              <div className={`${topStyles[level]} p-6`}>
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon size={22} color="white" strokeWidth={1.8} />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white
                                 bg-white/20 border border-white/30 px-2.5 py-1 rounded-full">
                  {type}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-sm text-slate-900 leading-snug mb-2 line-clamp-3">
                  {title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">
                  {description}
                </p>

                {/* Meta chips */}
                <div className="flex gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600
                                   bg-slate-100 px-2.5 py-1 rounded-md">
                    <Clock size={11} />
                    {duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600
                                   bg-slate-100 px-2.5 py-1 rounded-md">
                    <Monitor size={11} />
                    {mode}
                  </span>
                </div>

                <Link
                  to={`/formations/${slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600
                             hover:gap-2.5 transition-all duration-150"
                >
                  Découvrir
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/formations"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                       text-white text-sm font-semibold px-7 py-3.5 rounded-xl
                       transition-all duration-150 hover:-translate-y-0.5"
          >
            Voir toutes nos formations
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}