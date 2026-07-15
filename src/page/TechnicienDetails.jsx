// src/page/TechnicienDetails.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock, Monitor, GraduationCap, Award,
  Download, UserPlus, Target, LayoutDashboard,
  ClipboardList, BookOpen, FileText, Calendar,
  Briefcase, Phone, Mail, MapPin, CheckCircle2,
  CircleCheck, FileDown, ChevronRight, ExternalLink,
  BookOpen as BookOpenIcon, Building2, Users, PenTool, Monitor as MonitorIcon,
  Truck, Hotel, Settings, Wifi, HardHat, Zap, CircuitBoard
} from 'lucide-react';

// ─── Données de TOUTES les formations Technicien ─────────────────────────────
const technicienFormations = {
  'technicien-aide-comptable': {
    id: 'technicien-aide-comptable',
    level: 'Technicien',
    levelStyle: 'blue',
    icon: BookOpenIcon,
    title: 'Technicien Aide Comptable',
    description: "Le Programme d'aide comptable va à l'essentiel des compétences à maîtriser. Il se concentre sur la comptabilité générale, les opérations courantes et opérations d'inventaires.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables d'exercer les fonctions d'aide comptable dans les entreprises et cabinets d'expertise comptable.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac ou équivalent, ou expérience professionnelle significative.",
    prereqs: ["Avoir un niveau Bac ou équivalent.", "Ou justifier d'une expérience professionnelle d'au moins 2 ans.", "Passer un test de positionnement si nécessaire."],
    year1: ['Comptabilité générale', 'Opérations courantes', 'Opérations d\'inventaire', 'TVA et fiscalité', 'Paie et charges sociales', 'Logiciels comptables', 'Bureautique', 'Gestion d\'entreprise'],
    year2: ['Comptabilité approfondie', 'Analyse financière', 'Gestion de trésorerie', 'Contrôle de gestion', 'Stage professionnel'],
    careers: ["Aide comptable", "Assistant comptable", "Comptable junior", "Gestionnaire de paie"],
    brochureUrl: '/brochures/Technicien_Aide_Comptable.pdf',
  },
  'chef-chantier-travaux-publics': {
    id: 'chef-chantier-travaux-publics',
    level: 'Technicien',
    levelStyle: 'orange',
    icon: Building2,
    title: 'Chef de chantiers travaux publics',
    description: "Le Technicien Chef de Chantier TP a pour mission d'encadrer une ou plusieurs équipes de 15 à 20 personnes, orchestrées par des chefs d'équipe.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des chefs de chantier capables de gérer et superviser des projets de travaux publics.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Expérience dans le BTP ou niveau Bac technique.",
    prereqs: ["Expérience dans le secteur du BTP.", "Connaissances en lecture de plans.", "Capacité à encadrer une équipe."],
    year1: ['Lecture de plans', 'Management d\'équipe', 'Gestion de chantier', 'Sécurité sur chantier', 'Organisation des travaux'],
    year2: ['Conduite de travaux', 'Gestion des matériaux', 'Qualité et contrôle', 'Stage pratique'],
    careers: ["Chef de chantier", "Conducteur de travaux", "Responsable d'équipe BTP"],
    brochureUrl: '/brochures/Chef_Chantier_TP.pdf',
  },
  'technicien-commercial': {
    id: 'technicien-commercial',
    level: 'Technicien',
    levelStyle: 'green',
    icon: Users,
    title: 'Technicien Commercial',
    description: "Le programme de formation commerciale intègre les nouveaux enjeux concernant le métier commercial afin de faciliter le déploiement des nouvelles approches du client.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens commerciaux capables de développer des stratégies commerciales et gérer la relation client.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac ou équivalent, ou expérience professionnelle dans la vente.",
    prereqs: ["Avoir un niveau Bac ou équivalent.", "Ou justifier d'une expérience professionnelle de 2 ans dans la vente.", "Aptitude à la communication."],
    year1: ['Techniques de vente', 'Négociation commerciale', 'Marketing fondamental', 'Gestion de la relation client', 'Communication professionnelle', 'Prospection et fidélisation'],
    year2: ['Stratégie commerciale', 'Management commercial', 'Gestion de portefeuille client', 'Stage professionnel'],
    careers: ["Technicien commercial", "Chargé de clientèle", "Responsable de secteur"],
    brochureUrl: '/brochures/Technicien_Commercial.pdf',
  },
  'dessinateur-batiment': {
    id: 'dessinateur-batiment',
    level: 'Technicien',
    levelStyle: 'purple',
    icon: PenTool,
    title: 'Dessinateur de bâtiment',
    description: "A l'issue de la formation, le lauréat de formation est capable de réaliser les opérations et les activités de dessin technique et de conception de bâtiments.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des dessinateurs capables de réaliser des plans de bâtiment, des esquisses et des maquettes numériques.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac ou équivalent, ou expérience en dessin technique.",
    prereqs: ["Avoir un niveau Bac ou équivalent.", "Connaissances en dessin technique.", "Maîtrise des outils de CAO."],
    year1: ['Dessin technique', 'AutoCAD', 'Lecture de plans', 'Perspective et ombrage', 'Modélisation 3D', 'Règles de construction'],
    year2: ['CAO avancée', 'BIM', 'Projet de construction', 'Stage professionnel'],
    careers: ["Dessinateur projeteur", "Dessinateur en bâtiment", "Assistant architecte"],
    brochureUrl: '/brochures/Dessinateur_Batiment.pdf',
  },
  'technicien-informatique': {
    id: 'technicien-informatique',
    level: 'Technicien',
    levelStyle: 'indigo',
    icon: MonitorIcon,
    title: 'Technicien en informatique',
    description: "Le programme Informatique de gestion vise à former des personnes aptes à exercer la profession de programmeur-analyste dans le domaine de la gestion.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables de développer et maintenir des applications informatiques de gestion.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac ou équivalent, ou expérience professionnelle en informatique.",
    prereqs: ["Avoir un niveau Bac ou équivalent.", "Connaissances de base en informatique.", "Passer un test de positionnement."],
    year1: ['Algorithmique', 'Programmation', 'Bases de données', 'Réseaux', 'Systèmes d\'exploitation', 'Développement web', 'Gestion de projet'],
    year2: ['Programmation avancée', 'Développement mobile', 'Sécurité informatique', 'Stage professionnel'],
    careers: ["Développeur junior", "Technicien informatique", "Administrateur système", "Support technique"],
    brochureUrl: '/brochures/Technicien_Informatique.pdf',
  },
  'technicien-logistique': {
    id: 'technicien-logistique',
    level: 'Technicien',
    levelStyle: 'cyan',
    icon: Truck,
    title: 'Technicien Logistique',
    description: "Le Technicien en Logistique est chargé des opérations de réception, de mise en stock, de préparation des commandes et d'expédition des marchandises.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables de gérer les opérations logistiques et la chaîne d'approvisionnement.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac ou équivalent, ou expérience en logistique.",
    prereqs: ["Avoir un niveau Bac ou équivalent.", "Connaissances en gestion des stocks.", "Sens de l'organisation."],
    year1: ['Gestion des stocks', 'Chaîne d\'approvisionnement', 'Transport et entreposage', 'Management logistique', 'Informatique logistique'],
    year2: ['Logistique internationale', 'Supply chain', 'Gestion de projet', 'Stage professionnel'],
    careers: ["Technicien logistique", "Gestionnaire de stocks", "Responsable d'entrepôt"],
    brochureUrl: '/brochures/Technicien_Logistique.pdf',
  },
  'technicien-reception-hotel': {
    id: 'technicien-reception-hotel',
    level: 'Technicien',
    levelStyle: 'rose',
    icon: Hotel,
    title: 'Technicien Réception d\'hôtel',
    description: "Conçue sous forme modulaire, cette formation prépare aux diverses carrières dans plusieurs secteurs d'activités, principalement le tourisme.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables d'assurer la réception et l'accueil dans les établissements hôteliers.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac ou équivalent, ou expérience dans l'hôtellerie.",
    prereqs: ["Avoir un niveau Bac ou équivalent.", "Aptitude à la relation client.", "Maîtrise de l'anglais."],
    year1: ['Techniques d\'accueil', 'Gestion hôtelière', 'Réservation et facturation', 'Relation client', 'Communication professionnelle'],
    year2: ['Management hôtelier', 'Gestion des événements', 'Marketing touristique', 'Stage professionnel'],
    careers: ["Réceptionniste", "Responsable d'accueil", "Chargé de réservation"],
    brochureUrl: '/brochures/Technicien_Reception_Hotel.pdf',
  },
  'technicien-maintenance-industrielle': {
    id: 'technicien-maintenance-industrielle',
    level: 'Technicien',
    levelStyle: 'emerald',
    icon: Settings,
    title: 'Technicien en Maintenance Industrielle',
    description: "Formation complète en maintenance préventive et corrective des équipements industriels. Maîtrise des techniques de diagnostic, réparation et optimisation des machines de production.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables d'assurer la maintenance et la fiabilité des équipements industriels.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac technique ou expérience en maintenance.",
    prereqs: ["Niveau Bac technique.", "Connaissances en mécanique.", "Capacité d'analyse."],
    year1: ['Mécanique générale', 'Électricité industrielle', 'Automatismes', 'Diagnostic de pannes', 'Gestion de maintenance'],
    year2: ['Maintenance prédictive', 'GMAO', 'Sécurité industrielle', 'Stage professionnel'],
    careers: ["Technicien maintenance", "Responsable maintenance", "Chef d'équipe maintenance"],
    brochureUrl: '/brochures/Technicien_Maintenance_Industrielle.pdf',
  },
  'technicien-reseaux-telecoms': {
    id: 'technicien-reseaux-telecoms',
    level: 'Technicien',
    levelStyle: 'purple',
    icon: Wifi,
    title: 'Technicien Réseaux et Télécommunications',
    description: "Spécialisation dans l'installation, la configuration et la maintenance des réseaux informatiques et systèmes de télécommunications.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables d'administrer et sécuriser les réseaux informatiques.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac ou équivalent, ou expérience en informatique.",
    prereqs: ["Avoir un niveau Bac ou équivalent.", "Connaissances en informatique.", "Sens de l'analyse."],
    year1: ['Réseaux locaux', 'Protocoles TCP/IP', 'Sécurité réseau', 'Câblage structuré', 'Administration système'],
    year2: ['Réseaux étendus', 'Cybersécurité', 'Virtualisation', 'Stage professionnel'],
    careers: ["Administrateur réseau", "Technicien télécoms", "Spécialiste sécurité réseau"],
    brochureUrl: '/brochures/Technicien_Reseaux_Telecoms.pdf',
  },
  'technicien-genie-civil': {
    id: 'technicien-genie-civil',
    level: 'Technicien',
    levelStyle: 'yellow',
    icon: HardHat,
    title: 'Technicien en Génie Civil',
    description: "Formation aux techniques de construction, étude de sols, calcul de structures et gestion de projets BTP.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables de participer à la conception et à la réalisation de projets de génie civil.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac technique en construction ou expérience dans le BTP.",
    prereqs: ["Niveau Bac technique.", "Connaissances en construction.", "Lecture de plans."],
    year1: ['Matériaux de construction', 'Résistance des matériaux', 'Topographie', 'Lecture de plans', 'Gestion de chantier'],
    year2: ['Calcul de structures', 'VRD', 'BIM', 'Stage professionnel'],
    careers: ["Technicien génie civil", "Assistant conducteur de travaux", "Contrôleur technique"],
    brochureUrl: '/brochures/Technicien_Genie_Civil.pdf',
  },
  'technicien-energies-renouvelables': {
    id: 'technicien-energies-renouvelables',
    level: 'Technicien',
    levelStyle: 'emerald',
    icon: Zap,
    title: 'Technicien en Énergies Renouvelables',
    description: "Spécialiste de l'installation et maintenance des systèmes solaires, éoliens et autres technologies vertes. Formation aux normes environnementales et efficacité énergétique.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables d'installer et maintenir des systèmes d'énergies renouvelables.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac technique ou expérience dans le secteur de l'énergie.",
    prereqs: ["Niveau Bac technique.", "Connaissances en électricité.", "Sens de l'écologie."],
    year1: ['Énergie solaire photovoltaïque', 'Énergie éolienne', 'Réglementation environnementale', 'Efficacité énergétique'],
    year2: ['Systèmes hybrides', 'Stockage d\'énergie', 'Audit énergétique', 'Stage professionnel'],
    careers: ["Technicien en énergies renouvelables", "Installateur solaire", "Chargé de projet environnemental"],
    brochureUrl: '/brochures/Technicien_Energies_Renouvelables.pdf',
  },
  'technicien-electronique-industrielle': {
    id: 'technicien-electronique-industrielle',
    level: 'Technicien',
    levelStyle: 'indigo',
    icon: CircuitBoard,
    title: 'Technicien en Électronique Industrielle',
    description: "Maîtrise des systèmes électroniques industriels, automatismes et programmation d'automates. Compétences en diagnostic de pannes et optimisation des processus automatisés.",
    stats: [
      { icon: Clock, label: '1 an' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Technicien' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des techniciens capables d'intervenir sur les systèmes électroniques industriels et les automates.",
    features: [
      { icon: Clock, label: 'Durée', value: '1 an' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Personnalisé' },
      { icon: Award, label: 'Niveau', value: 'Bac +2' },
    ],
    prereqMain: "Niveau Bac technique en électronique ou expérience en automatisme.",
    prereqs: ["Niveau Bac technique.", "Connaissances en électronique.", "Capacité d'analyse."],
    year1: ['Électronique analogique', 'Électronique numérique', 'Automatismes', 'Programmation d\'automates', 'Capteurs et actionneurs'],
    year2: ['Systèmes embarqués', 'Maintenance électronique', 'Industrie 4.0', 'Stage professionnel'],
    careers: ["Technicien électronique", "Automaticien", "Responsable maintenance électronique"],
    brochureUrl: '/brochures/Technicien_Electronique_Industrielle.pdf',
  },
};

// ─── Styles dynamiques selon le niveau ────────────────────────────────────────
const heroStyles = {
  blue: 'from-slate-900 via-blue-950 to-blue-700',
  dark: 'from-slate-900 via-slate-800 to-slate-700',
  orange: 'from-slate-900 via-orange-900 to-orange-700',
  green: 'from-slate-900 via-green-900 to-green-700',
  purple: 'from-slate-900 via-purple-900 to-purple-700',
  indigo: 'from-slate-900 via-indigo-900 to-indigo-700',
  cyan: 'from-slate-900 via-cyan-900 to-cyan-700',
  rose: 'from-slate-900 via-rose-900 to-rose-700',
  yellow: 'from-slate-900 via-yellow-800 to-yellow-600',
  emerald: 'from-slate-900 via-emerald-900 to-emerald-700',
};

const levelBadgeStyles = {
  blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
  dark: 'bg-slate-600/40 border-slate-400/30 text-slate-300',
  orange: 'bg-orange-500/20 border-orange-400/30 text-orange-300',
  green: 'bg-green-500/20 border-green-400/30 text-green-300',
  purple: 'bg-purple-500/20 border-purple-400/30 text-purple-300',
  indigo: 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300',
  cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300',
  rose: 'bg-rose-500/20 border-rose-400/30 text-rose-300',
  yellow: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-300',
  emerald: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300',
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
export default function TechnicienDetails() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const f = technicienFormations[slug];

  if (!f) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">404</h1>
          <p className="text-gray-500 mb-6">Formation Technicien introuvable.</p>
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
            <Link to="/Technicien" className="hover:text-white transition-colors">Technicien</Link>
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