// src/page/LicenceDetails.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock, Monitor, GraduationCap, Award,
  Download, UserPlus, Target, LayoutDashboard,
  ClipboardList, BookOpen, FileText, Calendar,
  Briefcase, Phone, Mail, MapPin, CheckCircle2,
  CircleCheck, FileDown, ChevronRight, ExternalLink,
  Database, Calculator, Briefcase as BriefcaseIcon, FileText as FileTextIcon, 
  Building, Globe, HardHat, Compass
} from 'lucide-react';

// ─── Données de TOUTES les Licences Professionnelles ─────────────────────────
const licenceFormations = {
  'licence-geomatique': {
    id: 'licence-geomatique',
    level: 'Licence Pro',
    levelStyle: 'blue',
    icon: Globe,
    title: 'Licence Professionnelle en Géomatique et Ingénierie Topographique',
    description: "Formez-vous aux métiers de la géomatique et de l'ingénierie topographique. Maîtrisez les technologies géospatiales, les systèmes d'information géographique (SIG) et les techniques de topographie de précision.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Ce programme forme des professionnels capables de collecter, traiter et analyser des données géographiques et topographiques. Les diplômés maîtrisent les outils SIG, la cartographie numérique et les méthodes d'arpentage pour intervenir dans l'aménagement du territoire, l'urbanisme et les travaux publics.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Bac+2 en topographie, géographie, Génie civil, dessin de bâtiment ou dans un domaine scientifique.",
    prereqs: [
      "Avoir interrompu ses études pendant au moins deux sessions consécutives.",
      "Avoir complété au moins une année d'études postsecondaires.",
      "Justifier d'une expérience professionnelle d'au moins 2 ans en géographie, topographie ou ingénierie.",
    ],
    year1: [
      'Topographie générale', 
      'Cartographie numérique', 
      'Introduction aux SIG',
      'Géodésie et systèmes de référence', 
      'Photogrammétrie', 
      'Mathématiques appliquées',
      'Télédétection', 
      'Bureautique et logiciels SIG', 
      'Droit foncier et urbanisme', 
      'Projet tutoré S1'
    ],
    year2: [
      'SIG avancés et analyse spatiale', 
      'Topographie de précision', 
      'Drone et LiDAR',
      'Gestion de projets géomatiques', 
      'Bases de données géographiques', 
      'Stage professionnel (3 mois)'
    ],
    careers: [
      "Technicien géomaticien", 
      "Topographe en bureau d'études",
      "Opérateur SIG en collectivité", 
      "Chargé de cartographie", 
      "Technicien foncier"
    ],
    brochureUrl: '/brochures/Licence_Geomatique.pdf',
  },
  'licence-genie-civil': {
    id: 'licence-genie-civil',
    level: 'Licence Pro',
    levelStyle: 'orange',
    icon: HardHat,
    title: 'Licence Professionnelle en Génie Civil et Ingénierie Topographique',
    description: "Acquérez les compétences nécessaires pour concevoir, gérer et réaliser des projets d'infrastructure et de construction. Cette formation combine les fondamentaux du génie civil avec les techniques topographiques avancées.",
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
    prereqMain: "Bac+2 en topographie, géographie, Génie civil, dessin de bâtiment ou dans un domaine scientifique.",
    prereqs: [
      "Avoir interrompu ses études pendant au moins deux sessions consécutives.",
      "Avoir complété une année d'études postsecondaires.",
      "Justifier de 2 ans d'expérience en BTP, génie civil ou travaux publics.",
    ],
    year1: [
      "Résistance des matériaux", 
      "Mécanique des sols", 
      "Hydraulique appliquée",
      "Topographie de chantier", 
      "Dessin technique assisté (AutoCAD)", 
      "Matériaux de construction",
      "Calcul de structures", 
      "Législation du BTP", 
      "Gestion de chantier", 
      "Projet tutoré S1"
    ],
    year2: [
      'Béton armé et précontraint', 
      'Voirie et réseaux divers (VRD)', 
      'Topographie avancée',
      'Gestion de projet BTP', 
      'Métrés et estimation des coûts', 
      'Stage professionnel (3 mois)'
    ],
    careers: [
      'Conducteur de travaux junior', 
      'Technicien génie civil',
      'Dessinateur-projeteur BTP', 
      'Technicien VRD', 
      'Assistant chef de chantier'
    ],
    brochureUrl: '/brochures/Licence_Genie_Civil.pdf',
  },
  'licence-bdd-web': {
    id: 'licence-bdd-web',
    level: 'Licence Pro',
    levelStyle: 'blue',
    icon: Database,
    title: 'Licence Professionnelle Administration de Base de Donnée & Technologies WEB',
    description: "L'objectif de cette licence professionnelle est la formation de développeurs spécialistes des nouvelles technologies de construction d'applications mobiles et web.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des développeurs capables de concevoir et développer des applications web et mobiles en maîtrisant les bases de données et les technologies de pointe.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Bac+2 en informatique, développement web ou domaine scientifique.",
    prereqs: [
      "Avoir un niveau Bac+2 en informatique.",
      "Ou justifier d'une expérience professionnelle de 2 ans en développement.",
      "Passer un test de positionnement si nécessaire.",
    ],
    year1: [
      'Programmation web', 
      'Bases de données SQL/NoSQL', 
      'Développement mobile',
      'Architecture logicielle', 
      'Design patterns', 
      'Frameworks JavaScript',
      'API et Web Services'
    ],
    year2: [
      'Développement avancé', 
      'DevOps', 
      'Sécurité informatique',
      'Intelligence artificielle', 
      'Stage professionnel (3 mois)'
    ],
    careers: [
      "Développeur web", 
      "Développeur mobile", 
      "Administrateur BDD",
      "Chef de projet technique"
    ],
    brochureUrl: '/brochures/Licence_BDD_WEB.pdf',
  },
  'licence-comptabilite': {
    id: 'licence-comptabilite',
    level: 'Licence Pro',
    levelStyle: 'green',
    icon: Calculator,
    title: 'Licence Professionnelle Comptabilité, Finance, Audit',
    description: "Cette formation a pour objectifs de former des compétences capables de participer au Management des Organisations dans les domaines comptables et financiers.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des professionnels capables de maîtriser les techniques du contrôle, de la Finance et d'Audit pour participer au management des organisations.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Bac+2 en comptabilité, gestion ou finance.",
    prereqs: [
      "Avoir un niveau Bac+2 en comptabilité.",
      "Ou justifier d'une expérience professionnelle de 2 ans en finance.",
      "Passer un test de positionnement.",
    ],
    year1: [
      'Comptabilité générale et approfondie', 
      'Analyse financière', 
      'Audit et contrôle',
      'Gestion de trésorerie', 
      'Fiscalité', 
      'Droit des affaires'
    ],
    year2: [
      'Comptabilité avancée', 
      'Contrôle de gestion', 
      'Finance d\'entreprise',
      'Reporting financier', 
      'Stage professionnel (3 mois)'
    ],
    careers: [
      "Expert comptable", 
      "Auditeur financier", 
      "Contrôleur de gestion",
      "Analyste financier"
    ],
    brochureUrl: '/brochures/Licence_Comptabilite.pdf',
  },
  'licence-gestion': {
    id: 'licence-gestion',
    level: 'Licence Pro',
    levelStyle: 'purple',
    icon: BriefcaseIcon,
    title: 'Licence Professionnelle Gestion des Entreprises',
    description: "La licence Gestion des entreprises est une formation à la fois délibérément généraliste et résolument tournée vers le monde professionnel.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des managers capables de gérer et diriger des entreprises en maîtrisant les fondamentaux du management, du marketing et de la finance.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Bac+2 en gestion, économie ou domaine connexe.",
    prereqs: [
      "Avoir un niveau Bac+2 en gestion.",
      "Ou justifier d'une expérience professionnelle de 2 ans en management.",
      "Passer un test de positionnement.",
    ],
    year1: [
      'Management des organisations', 
      'Marketing stratégique', 
      'Gestion financière',
      'Ressources humaines', 
      'Stratégie d\'entreprise', 
      'Droit des affaires'
    ],
    year2: [
      'Leadership', 
      'Gestion de projet', 
      'Entrepreneuriat',
      'Business plan', 
      'Stage professionnel (3 mois)'
    ],
    careers: [
      "Manager", 
      "Responsable d'équipe", 
      "Chef d'entreprise",
      "Consultant en gestion"
    ],
    brochureUrl: '/brochures/Licence_Gestion.pdf',
  },
  'licence-notariat': {
    id: 'licence-notariat',
    level: 'Licence Pro',
    levelStyle: 'indigo',
    icon: FileTextIcon,
    title: 'Licence Professionnelle Métiers du Notariat',
    description: "Pendant la licence professionnelle en entrepreneuriat, les étudiants sont formés à la création et à la gestion d'une entreprise, et d'un produit.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des professionnels capables d'exercer les métiers du notariat et de l'immobilier en maîtrisant le droit, la fiscalité et la gestion de patrimoine.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Bac+2 en droit, gestion ou domaine juridique.",
    prereqs: [
      "Avoir un niveau Bac+2 en droit.",
      "Ou justifier d'une expérience professionnelle de 2 ans dans le juridique.",
      "Passer un test de positionnement.",
    ],
    year1: [
      'Droit civil', 
      'Droit des contrats', 
      'Fiscalité et droit des affaires',
      'Gestion de patrimoine', 
      'Droit immobilier'
    ],
    year2: [
      'Droit notarial', 
      'Rédaction d\'actes', 
      'Gestion de clientèle',
      'Déontologie du notariat', 
      'Stage professionnel (3 mois)'
    ],
    careers: [
      "Assistant notarial", 
      "Responsable juridique", 
      "Gestionnaire de patrimoine",
      "Conseiller en immobilier"
    ],
    brochureUrl: '/brochures/Licence_Notariat.pdf',
  },
  'licence-genie-civil-base': {
    id: 'licence-genie-civil-base',
    level: 'Licence Pro',
    levelStyle: 'amber',
    icon: Building,
    title: 'Licence Professionnelle Génie Civil',
    description: "Cette formation permettra aux étudiants d'acquérir les compétences suivantes : Connaissance des différents types de matériaux de construction. Acquisition des techniques principales utilisées dans la construction.",
    stats: [
      { icon: Clock, label: '1 an (2 semestres)' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Licence Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens supérieurs capables de participer à la conception, à la réalisation et au suivi de projets de construction.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +3' },
    ],
    prereqMain: "Bac+2 en génie civil, BTP ou domaine technique.",
    prereqs: [
      "Avoir un niveau Bac+2 en génie civil.",
      "Ou justifier d'une expérience professionnelle de 2 ans dans le BTP.",
      "Passer un test de positionnement.",
    ],
    year1: [
      'Matériaux de construction', 
      'Résistance des matériaux', 
      'Topographie',
      'Dessin technique et plans', 
      'Gestion de chantier'
    ],
    year2: [
      'Calcul de structures', 
      'VRD', 
      'BIM et modélisation',
      'Sécurité et normes', 
      'Stage professionnel (3 mois)'
    ],
    careers: [
      "Technicien en génie civil", 
      "Assistant conducteur de travaux", 
      "Contrôleur technique",
      "Responsable de chantier"
    ],
    brochureUrl: '/brochures/Licence_Genie_Civil_Base.pdf',
  },
};

// ─── Styles dynamiques selon le niveau ────────────────────────────────────────
const heroStyles = {
  blue: 'from-slate-900 via-blue-950 to-blue-700',
  orange: 'from-slate-900 via-orange-900 to-orange-700',
  green: 'from-slate-900 via-green-900 to-green-700',
  purple: 'from-slate-900 via-purple-900 to-purple-700',
  indigo: 'from-slate-900 via-indigo-900 to-indigo-700',
  amber: 'from-slate-900 via-amber-900 to-amber-700',
};

const levelBadgeStyles = {
  blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
  orange: 'bg-orange-500/20 border-orange-400/30 text-orange-300',
  green: 'bg-green-500/20 border-green-400/30 text-green-300',
  purple: 'bg-purple-500/20 border-purple-400/30 text-purple-300',
  indigo: 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300',
  amber: 'bg-amber-500/20 border-amber-400/30 text-amber-300',
};

const featureIconColors = ['text-blue-500', 'text-purple-500', 'text-green-500', 'text-amber-500'];

// ─── Tabs config ──────────────────────────────────────────────────────────────
const TABS = [
  { id: 'overview', label: "Vue d'ensemble", Icon: LayoutDashboard },
  { id: 'prereqs', label: 'Pré-requis', Icon: ClipboardList },
  { id: 'program', label: 'Programme', Icon: BookOpen },
  { id: 'details', label: 'Détails', Icon: FileText },
];

// ─── Composant Brochure ──────────────────────────────────────────────────────
const BrochureDownload = ({ brochureUrl }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(null);

  const handleDownload = async () => {
    if (!brochureUrl) {
      setDownloadError('Brochure non disponible');
      return;
    }

    setIsDownloading(true);
    setDownloadError(null);

    try {
      const response = await fetch(brochureUrl, { method: 'HEAD' });
      if (response.ok) {
        window.open(brochureUrl, '_blank');
      } else {
        setDownloadError('La brochure n\'est pas encore disponible.');
      }
    } catch (error) {
      console.error('Erreur de téléchargement:', error);
      setDownloadError('Erreur de téléchargement. Veuillez réessayer.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Téléchargement...
          </>
        ) : (
          <>
            <Download size={18} />
            Télécharger la brochure
            <ExternalLink size={14} className="opacity-70" />
          </>
        )}
      </button>
      {downloadError && <p className="text-red-500 text-xs text-center">{downloadError}</p>}
      <p className="text-xs text-slate-400 text-center">Format PDF · Détail des modules et programme complet</p>
    </div>
  );
};

// ─── Composant Principal ──────────────────────────────────────────────────────
export default function LicenceDetails() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const f = licenceFormations[slug];

  if (!f) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">404</h1>
          <p className="text-gray-500 mb-6">Licence Professionnelle introuvable.</p>
          <Link to="/formations" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Voir toutes les formations
          </Link>
        </div>
      </div>
    );
  }

  const HeroIcon = f.icon;
  const levelStyle = heroStyles[f.levelStyle] || heroStyles.blue;
  const badgeStyle = levelBadgeStyles[f.levelStyle] || levelBadgeStyles.blue;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className={`relative bg-gradient-to-br ${levelStyle} overflow-hidden`}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={12} />
            <Link to="/formations" className="hover:text-white transition-colors">Formations</Link>
            <ChevronRight size={12} />
            <Link to="/LicenceProfessionnelle" className="hover:text-white transition-colors">Licences Pro</Link>
            <ChevronRight size={12} />
            <span className="text-slate-300">{f.level}</span>
          </div>

          {/* Badge niveau */}
          <span className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase border px-3 py-1.5 rounded-full mb-5 ${badgeStyle}`}>
            <GraduationCap size={11} />
            {f.level}
          </span>

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
            <BrochureDownload brochureUrl={f.brochureUrl} />
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
                    +212 665 654 031
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
                <BrochureDownload brochureUrl={f.brochureUrl} />
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