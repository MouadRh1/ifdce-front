// src/page/FormationDetail.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Globe, HardHat, BarChart2, Building2,
  Clock, Monitor, GraduationCap, Award,
  Download, UserPlus, Target, LayoutDashboard,
  ClipboardList, BookOpen, FileText, Calendar,
  Briefcase, Phone, Mail, MapPin, CheckCircle2,
  CircleCheck, FileDown, ChevronRight,
} from 'lucide-react';

// ─── Données des 4 formations ────────────────────────────────────────────────
const formations = {
  'licence-geomatique': {
    level: 'Licence Pro',
    levelStyle: 'blue',
    icon: Globe,
    title: 'Licence Professionnelle en Géomatique et Ingénierie Topographique',
    description: "Maîtrisez les technologies géospatiales, les systèmes d'information géographique et la topographie de précision pour intégrer les secteurs public et privé.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Ce programme forme des techniciens capables de collecter, traiter et analyser des données géographiques et topographiques. Les diplômés maîtrisent les outils SIG, la cartographie numérique et les méthodes d'arpentage.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Les candidats doivent être titulaires d'un diplôme Bac+2 (BTS, DUT ou équivalent) dans un domaine scientifique ou technique, ou posséder une formation jugée suffisante par la commission pédagogique.",
    prereqs: [
      "Avoir interrompu ses études pendant au moins deux sessions consécutives ou une année scolaire complète.",
      "Avoir complété au moins une année d'études postsecondaires échelonnée sur une période d'un an ou plus.",
      "Justifier d'une expérience professionnelle d'au moins 2 ans en géographie, topographie ou ingénierie.",
    ],
    year1: [
      'Topographie générale', 'Cartographie numérique', 'Introduction aux SIG',
      'Géodésie et systèmes de référence', 'Photogrammétrie', 'Mathématiques appliquées',
      'Télédétection', 'Bureautique et logiciels SIG', 'Droit foncier et urbanisme', 'Projet tutoré S1',
    ],
    year2: [
      'SIG avancés et analyse spatiale', 'Topographie de précision', 'Drone et LiDAR',
      'Gestion de projets géomatiques', 'Bases de données géographiques', 'Stage professionnel (3 mois)',
    ],
    careers: [
      "Technicien géomaticien", "Topographe en bureau d'études",
      "Opérateur SIG en collectivité", "Chargé de cartographie", "Technicien foncier",
    ],
  },

  'licence-genie-civil': {
    level: 'Licence Pro',
    levelStyle: 'blue',
    icon: HardHat,
    title: 'Licence Professionnelle en Génie Civil et Ingénierie Topographique',
    description: "Conception et gestion de projets d'infrastructure. Formez-vous aux méthodes du génie civil et à la topographie appliquée aux chantiers de BTP.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Ce programme prépare les étudiants à piloter des projets d'infrastructures routières, hydrauliques et bâtiment, en combinant techniques du génie civil et relevés topographiques de terrain.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Être titulaire d'un BTS, DUT ou diplôme équivalent en génie civil, construction ou domaine technique apparenté.",
    prereqs: [
      "Avoir interrompu ses études pendant au moins deux sessions consécutives.",
      "Avoir complété une année d'études postsecondaires sur une période d'un an ou plus.",
      "Justifier de 2 ans d'expérience en BTP, génie civil ou travaux publics.",
    ],
    year1: [
      "Résistance des matériaux", "Mécanique des sols", "Hydraulique appliquée",
      "Topographie de chantier", "Dessin technique assisté (AutoCAD)", "Matériaux de construction",
      "Calcul de structures", "Législation du BTP", "Gestion de chantier", "Projet tutoré S1",
    ],
    year2: [
      'Béton armé et précontraint', 'Voirie et réseaux divers (VRD)', 'Topographie avancée',
      'Gestion de projet BTP', 'Métrés et estimation des coûts', 'Stage professionnel (3 mois)',
    ],
    careers: [
      'Conducteur de travaux junior', 'Technicien génie civil',
      'Dessinateur-projeteur BTP', 'Technicien VRD', 'Assistant chef de chantier',
    ],
  },

  'master-geomatique': {
    level: 'Master Pro',
    levelStyle: 'dark',
    icon: BarChart2,
    title: 'Master Professionnel en Géomatique et Ingénierie Topographique',
    description: "Expertise avancée en systèmes d'information géographique. Pilotez des projets complexes alliant big data géospatial, modélisation 3D et intelligence territoriale.",
    stats: [
      { icon: Clock, label: '2 ans (4 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Ce master forme des experts capables de concevoir et piloter des systèmes d'information géographique complexes, d'exploiter la télédétection avancée et de manager des équipes techniques pluridisciplinaires.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence (Bac+3) en géomatique, géographie, topographie ou domaine scientifique équivalent.",
    prereqs: [
      'Licence professionnelle ou académique dans un domaine scientifique ou technique.',
      'Dossier de candidature incluant lettre de motivation et CV détaillé.',
      'Entretien de sélection avec la commission pédagogique.',
    ],
    year1: [
      'SIG avancés (ArcGIS / QGIS Pro)', 'Analyse spatiale et géostatistiques',
      'Télédétection satellitaire avancée', 'Modélisation 3D du terrain (LiDAR)',
      'Bases de données géographiques (PostGIS)', 'Programmation géospatiale (Python)',
      'Drone mapping et photogrammétrie avancée', 'Infrastructure de données spatiales',
      'Gestion de projets SIG', 'Séminaire de recherche',
    ],
    year2: [
      'Intelligence artificielle appliquée à la géomatique', 'Big data géospatial',
      'Urbanisme et aménagement du territoire', 'Géomatique et développement durable',
      "Management d'équipes techniques", 'Mémoire professionnel / Stage long (6 mois)',
    ],
    careers: [
      "Chef de projet SIG", "Ingénieur géomaticien senior",
      "Consultant en géo-intelligence", "Responsable données spatiales",
      "Directeur de bureau d'études géographiques",
    ],
  },

  "master-genie-civil": {
    level: 'Master Pro',
    levelStyle: 'dark',
    icon: Building2,
    title: 'Master Professionnel en Génie Civil et Ingénierie Topographique',
    description: "Management de projets d'ingénierie civile et topographique à grande échelle. Pilotez infrastructures, BIM et grands travaux avec une expertise de haut niveau.",
    stats: [
      { icon: Clock, label: '2 ans (4 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Ce master forme des ingénieurs capables de diriger des projets d'infrastructures complexes : routes, ponts, barrages et bâtiments, en intégrant le BIM, le management des risques et la topographie de précision.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence (Bac+3) en génie civil, BTP, géotechnique ou domaine d'ingénierie connexe.",
    prereqs: [
      'Licence professionnelle ou académique en génie civil ou domaine technique.',
      'Dossier complet : relevés de notes, lettre de motivation, CV.',
      'Entretien de sélection avec jury pédagogique.',
    ],
    year1: [
      'Structures avancées (béton précontraint, acier)', 'Géotechnique et fondations profondes',
      'BIM (Revit / Navisworks)', 'Hydraulique et hydrologie urbaine',
      'Topographie de haute précision', 'Management de projet (PMI/PMP)',
      'Développement durable en génie civil', 'Droit des marchés publics',
      'Analyse des risques et sécurité chantier', 'Séminaire professionnel',
    ],
    year2: [
      "Grands ouvrages d'art (ponts, tunnels)", "Smart city et infrastructures intelligentes",
      "Gestion financière de projets d'ingénierie", "Topographie satellitaire (GNSS)",
      "Leadership et management d'équipes", "Mémoire professionnel / Stage long (6 mois)",
    ],
    careers: [
      'Directeur de travaux', 'Ingénieur structure senior',
      'Chef de projet BIM', 'Responsable ingénierie BTP',
      'Consultant en infrastructure publique',
    ],
  },
};

// ─── Styles dynamiques selon le niveau ────────────────────────────────────────
const heroStyles = {
  blue: 'from-slate-900 via-blue-950 to-blue-700',
  dark: 'from-slate-900 via-slate-800 to-slate-700',
};

const levelBadgeStyles = {
  blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
  dark: 'bg-slate-600/40 border-slate-400/30 text-slate-300',
};

const featureIconColors = ['text-blue-500', 'text-purple-500', 'text-green-500', 'text-amber-500'];

// ─── Tabs config ──────────────────────────────────────────────────────────────
const TABS = [
  { id: 'overview', label: "Vue d'ensemble", Icon: LayoutDashboard },
  { id: 'prereqs', label: 'Pré-requis', Icon: ClipboardList },
  { id: 'program', label: 'Programme', Icon: BookOpen },
  { id: 'details', label: 'Détails', Icon: FileText },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function FormationDetail() {
  // Utiliser useParams pour récupérer le slug depuis l'URL
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const f = formations[slug];

  if (!f) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">404</h1>
          <p className="text-gray-500 mb-6">Formation introuvable.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const HeroIcon = f.icon;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className={`relative bg-gradient-to-br ${heroStyles[f.levelStyle]} overflow-hidden`}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={12} />
            <Link to="/formations" className="hover:text-white transition-colors">Formations</Link>
            <ChevronRight size={12} />
            <span className="text-slate-300">{f.level}</span>
          </div>

          {/* Badge niveau */}
          {/* <span className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase border px-3 py-1.5 rounded-full mb-5 ${levelBadgeStyles[f.levelStyle]}`}>
            <GraduationCap size={11} />
            {f.level}
          </span> */}

          <div className="flex items-start gap-5 mb-4">
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 border border-white/20 items-center justify-center flex-shrink-0 mt-1">
              <HeroIcon size={26} color="white" strokeWidth={1.6} />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {f.title}
            </h1>
          </div>

          <p className="text-slate-300 text-base leading-relaxed max-w-2xl mb-8">
            {f.description}
          </p>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {f.stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/8 border border-white/12 px-3.5 py-2 rounded-lg text-slate-200 text-sm">
                <Icon size={14} className="text-blue-300" />
                {label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 items-center">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors">
              <Download size={15} />
              Télécharger la brochure
            </button>
            <Link to="/authentification">
              <button className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors">
                <UserPlus size={15} />
                S'inscrire
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Sticky Tabs ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 text-sm font-medium py-4 px-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Target size={20} />
                </div>
                <h2 className="text-lg font-bold text-slate-900">Objectif de la formation</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{f.objective}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {f.features.map(({ icon: Icon, label, value }, i) => (
                <div key={label} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                  <Icon size={22} className={`mx-auto mb-2 ${featureIconColors[i % featureIconColors.length]}`} />
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">{label}</p>
                  <p className="font-bold text-sm text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pré-requis */}
        {activeTab === 'prereqs' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                <ClipboardList size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Conditions d'admission</h2>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-6">
              <p className="text-blue-900 text-sm leading-relaxed">
                <strong className="text-blue-700">Formation de base requise — </strong>
                {f.prereqMain}
              </p>
            </div>

            <p className="text-sm font-semibold text-slate-700 mb-4">
              Satisfaire à l'une des conditions suivantes :
            </p>
            <div className="space-y-0 divide-y divide-slate-100">
              {f.prereqs.map((p, i) => (
                <div key={i} className="flex items-start gap-3 py-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={13} className="text-green-600" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programme */}
        {activeTab === 'program' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">1re année</h2>
                  <p className="text-xs text-slate-400">Fondamentaux et outils</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {f.year1.map((course, i) => (
                  <div key={i} className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition-colors rounded-lg px-3 py-3">
                    <span className="w-6 h-6 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-slate-800 text-sm font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {f.levelStyle === 'dark' ? '2e année' : '2e semestre — Spécialisation'}
                  </h2>
                  <p className="text-xs text-slate-400">Approfondissement et stage</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {f.year2.map((course, i) => (
                  <div key={i} className="flex items-center gap-3 bg-green-50 hover:bg-green-100 transition-colors rounded-lg px-3 py-3">
                    <span className="w-6 h-6 rounded-md bg-green-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-slate-800 text-sm font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Détails */}
        {activeTab === 'details' && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                    <Briefcase size={20} />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">Débouchés professionnels</h2>
                </div>
                <ul className="divide-y divide-slate-100">
                  {f.careers.map((career, i) => (
                    <li key={i} className="flex items-center gap-3 py-3 text-sm text-slate-600">
                      <CircleCheck size={15} className="text-green-500 flex-shrink-0" />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <Phone size={20} />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">Contact</h2>
                </div>
                <div className="space-y-0 divide-y divide-slate-100">
                  <div className="flex items-center gap-3 py-3 text-sm text-slate-600">
                    <Mail size={15} className="text-blue-500 flex-shrink-0" />
                    contact@ifdce.ma
                  </div>
                  <div className="flex items-center gap-3 py-3 text-sm text-slate-600">
                    <Phone size={15} className="text-blue-500 flex-shrink-0" />
                    +212 5XX XX XX XX
                  </div>
                  <div className="flex items-center gap-3 py-3 text-sm text-slate-600">
                    <MapPin size={15} className="text-blue-500 flex-shrink-0" />
                    Témara, Maroc
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                    <FileDown size={20} />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">Ressources</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  Téléchargez la brochure complète pour accéder au détail des modules, des intervenants et des modalités d'évaluation.
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors">
                  <Download size={15} />
                  Brochure PDF
                </button>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-2">Candidater pour 2025–2026</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Les inscriptions sont ouvertes. Déposez votre dossier en ligne avant la date limite.
                </p>
                <Link to="/authentification">
                  <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors">
                    <UserPlus size={15} />
                    Déposer ma candidature
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}