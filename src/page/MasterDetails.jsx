// src/page/MasterDetails.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock, Monitor, GraduationCap, Award,
  Download, UserPlus, Target, LayoutDashboard,
  ClipboardList, BookOpen, FileText, Calendar,
  Briefcase, Phone, Mail, MapPin, CheckCircle2,
  CircleCheck, FileDown, ChevronRight, ExternalLink,
  Brain, Users, Award as AwardIcon, Banknote, Calculator, Building2, 
  Palette, Construction, Globe, HardHat, Shield, Leaf, TrendingUp, UserCheck
} from 'lucide-react';

// ─── Données de TOUS les Masters Professionnels ──────────────────────────────
const masterFormations = {
  'master-geomatique': {
    id: 'master-geomatique',
    level: 'Master Pro',
    levelStyle: 'cyan',
    icon: Globe,
    title: 'Master Professionnel en Géomatique et Ingénierie Topographique',
    description: "Formation d'excellence en géomatique et ingénierie topographique. Maîtrise des systèmes d'information géographique (SIG), télédétection, cartographie numérique et gestion de projets géospatiaux.",
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
      'SIG avancés (ArcGIS / QGIS Pro)', 
      'Analyse spatiale et géostatistiques',
      'Télédétection satellitaire avancée', 
      'Modélisation 3D du terrain (LiDAR)',
      'Bases de données géographiques (PostGIS)', 
      'Programmation géospatiale (Python)',
      'Drone mapping et photogrammétrie avancée', 
      'Infrastructure de données spatiales',
      'Gestion de projets SIG', 
      'Séminaire de recherche'
    ],
    year2: [
      'Intelligence artificielle appliquée à la géomatique', 
      'Big data géospatial',
      'Urbanisme et aménagement du territoire', 
      'Géomatique et développement durable',
      "Management d'équipes techniques", 
      'Mémoire professionnel / Stage long (6 mois)'
    ],
    careers: [
      "Chef de projet SIG", 
      "Ingénieur géomaticien senior",
      "Consultant en géo-intelligence", 
      "Responsable données spatiales",
      "Directeur de bureau d'études géographiques"
    ],
    brochureUrl: '/brochures/Master_Geomatique.pdf',
  },
  'master-genie-civil': {
    id: 'master-genie-civil',
    level: 'Master Pro',
    levelStyle: 'orange',
    icon: HardHat,
    title: 'Master Professionnel en Génie Civil et Ingénierie Topographique',
    description: "Programme avancé en génie civil et ingénierie topographique. Formation aux techniques de conception, calcul de structures, gestion de projets d'infrastructure et topographie de précision.",
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
      'Structures avancées (béton précontraint, acier)', 
      'Géotechnique et fondations profondes',
      'BIM (Revit / Navisworks)', 
      'Hydraulique et hydrologie urbaine',
      'Topographie de haute précision', 
      'Management de projet (PMI/PMP)',
      'Développement durable en génie civil', 
      'Droit des marchés publics',
      'Analyse des risques et sécurité chantier', 
      'Séminaire professionnel'
    ],
    year2: [
      "Grands ouvrages d'art (ponts, tunnels)", 
      "Smart city et infrastructures intelligentes",
      "Gestion financière de projets d'ingénierie", 
      "Topographie satellitaire (GNSS)",
      "Leadership et management d'équipes", 
      "Mémoire professionnel / Stage long (6 mois)"
    ],
    careers: [
      'Directeur de travaux', 
      'Ingénieur structure senior',
      'Chef de projet BIM', 
      'Responsable ingénierie BTP',
      'Consultant en infrastructure publique'
    ],
    brochureUrl: '/brochures/Master_Genie_Civil.pdf',
  },
  'master-psychopraticien': {
    id: 'master-psychopraticien',
    level: 'Master Pro',
    levelStyle: 'purple',
    icon: Brain,
    title: 'Master Professionnel Psychopraticien',
    description: "Formation spécialisée en psychopratique permettant d'acquérir les compétences nécessaires pour accompagner les individus dans leur développement personnel et professionnel.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des psychopraticiens capables d'accompagner les individus dans leur développement personnel et professionnel.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en psychologie ou domaine connexe.",
    prereqs: [
      'Licence en psychologie ou sciences humaines.',
      'Dossier de candidature et lettre de motivation.',
      'Entretien de sélection avec le jury.',
    ],
    year1: [
      'Psychologie clinique', 
      'Psychopathologie', 
      'Méthodes thérapeutiques',
      'Écoute et relation d\'aide', 
      'Éthique et déontologie',
      'Techniques d\'entretien'
    ],
    year2: [
      'Psychopratique avancée', 
      'Gestion des émotions', 
      'Crisis intervention',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Psychopraticien", 
      "Thérapeute", 
      "Conseiller en développement personnel",
      "Formateur en communication"
    ],
    brochureUrl: '/brochures/Master_Psychopraticien.pdf',
  },
  'master-coach-top-management': {
    id: 'master-coach-top-management',
    level: 'Master Pro',
    levelStyle: 'blue',
    icon: Users,
    title: 'Master Professionnel Coach Top Management',
    description: "Programme de formation avancée pour développer les compétences en coaching de dirigeants et de cadres supérieurs dans les organisations.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des coaches capables d'accompagner les dirigeants et cadres supérieurs dans leur développement professionnel.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en management, psychologie ou domaine connexe.",
    prereqs: [
      'Licence en management ou sciences humaines.',
      'Expérience professionnelle significative.',
      'Entretien de sélection.',
    ],
    year1: [
      'Fondamentaux du coaching', 
      'Psychologie du leadership', 
      'Communication avancée',
      'Gestion de conflits', 
      'Coaching d\'équipe'
    ],
    year2: [
      'Coaching exécutif', 
      'Stratégies de changement', 
      'Performance et bien-être',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Coach exécutif", 
      "Consultant en leadership", 
      "Directeur de développement",
      "Formateur en management"
    ],
    brochureUrl: '/brochures/Master_Coach_Top_Management.pdf',
  },
  'master-expert-coach': {
    id: 'master-expert-coach',
    level: 'Master Pro',
    levelStyle: 'amber',
    icon: AwardIcon,
    title: 'Master Professionnel Expert Coach',
    description: "Formation d'excellence pour devenir expert en coaching professionnel avec une expertise approfondie dans l'accompagnement des individus et des équipes.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts en coaching capables d'intervenir à tous les niveaux de l'organisation.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence ou avoir une expérience significative en coaching.",
    prereqs: [
      'Licence ou expérience en coaching.',
      'Dossier de candidature complet.',
      'Entretien de sélection.',
    ],
    year1: [
      'Théories du coaching', 
      'Pratiques avancées', 
      'Analyse systémique',
      'Supervision', 
      'Éthique et déontologie'
    ],
    year2: [
      'Expertise en coaching', 
      'Méthodologies innovantes', 
      'Recherche appliquée',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Expert coach", 
      "Superviseur en coaching", 
      "Consultant en développement",
      "Formateur certifié"
    ],
    brochureUrl: '/brochures/Master_Expert_Coach.pdf',
  },
  'master-banque-privee': {
    id: 'master-banque-privee',
    level: 'Master Pro',
    levelStyle: 'green',
    icon: Banknote,
    title: 'Master Professionnel Banque Privée Internationale',
    description: "Former des professionnels aptes à prendre en charge un portefeuille de clientèles haut de gamme. Leurs missions sont la gestion de patrimoine et le conseil en investissement.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts en banque privée et gestion de patrimoine pour les clientèles haut de gamme.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en finance, économie ou gestion.",
    prereqs: [
      'Licence en finance ou économie.',
      'Expérience en banque ou finance.',
      'Entretien de sélection.',
    ],
    year1: [
      'Banque privée', 
      'Gestion de patrimoine', 
      'Marchés financiers',
      'Droit fiscal', 
      'Conseil en investissement'
    ],
    year2: [
      'Stratégies patrimoniales', 
      'Finance internationale', 
      'Relation client haut de gamme',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Banquier privé", 
      "Gestionnaire de patrimoine", 
      "Conseiller en investissement",
      "Responsable de clientèle haut de gamme"
    ],
    brochureUrl: '/brochures/Master_Banque_Privee.pdf',
  },
  'master-comptabilite-controle-audit': {
    id: 'master-comptabilite-controle-audit',
    level: 'Master Pro',
    levelStyle: 'indigo',
    icon: Calculator,
    title: 'Master Professionnel Comptabilité, Contrôle de Gestion, Audit',
    description: "Le Master forme en deux années des spécialistes de la comptabilité, du contrôle de gestion et de l'audit dans les organisations modernes.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts en comptabilité, contrôle de gestion et audit capables de piloter la performance financière des organisations.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en comptabilité, finance ou gestion.",
    prereqs: [
      'Licence en comptabilité ou gestion.',
      'Expérience en finance ou audit.',
      'Entretien de sélection.',
    ],
    year1: [
      'Comptabilité approfondie', 
      'Contrôle de gestion', 
      'Audit financier',
      'Finance d\'entreprise', 
      'Systèmes d\'information'
    ],
    year2: [
      'Audit avancé', 
      'Gestion des risques', 
      'Reporting financier',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Expert-comptable", 
      "Auditeur financier", 
      "Contrôleur de gestion",
      "Directeur financier"
    ],
    brochureUrl: '/brochures/Master_Comptabilite_Audit.pdf',
  },
  'master-charge-affaires': {
    id: 'master-charge-affaires',
    level: 'Master Pro',
    levelStyle: 'teal',
    icon: Building2,
    title: 'Master Professionnel Chargé d\'Affaires Entreprises et Institutions',
    description: "Le Master Chargé d'affaires est un cursus entièrement échelonné sur deux années pour former des experts en relation client B2B.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des chargés d'affaires capables de gérer des relations commerciales complexes avec les entreprises et institutions.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en commerce, gestion ou relation client.",
    prereqs: [
      'Licence en commerce ou gestion.',
      'Expérience en relation client.',
      'Entretien de sélection.',
    ],
    year1: [
      'Stratégie commerciale', 
      'Gestion de la relation client', 
      'Négociation avancée',
      'Marketing B2B', 
      'Gestion de projet'
    ],
    year2: [
      'Management commercial', 
      'Développement des affaires', 
      'Contrats et juridique',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Chargé d'affaires", 
      "Responsable commercial", 
      "Business développeur",
      "Directeur des comptes clés"
    ],
    brochureUrl: '/brochures/Master_Charge_Affaires.pdf',
  },
  'master-decoration-interieur': {
    id: 'master-decoration-interieur',
    level: 'Master Pro',
    levelStyle: 'pink',
    icon: Palette,
    title: 'Master Professionnel Décoration d\'Intérieur',
    description: "Le Master en Décoration intérieure se déroule en 2 ans et s'adresse aux créatifs passionnés par l'aménagement d'espaces.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des décorateurs d'intérieur capables de concevoir et réaliser des projets d'aménagement d'espaces.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en design, architecture ou arts visuels.",
    prereqs: [
      'Licence en design ou architecture.',
      'Portfolio artistique.',
      'Entretien de sélection.',
    ],
    year1: [
      'Design d\'intérieur', 
      'Histoire de l\'art', 
      'Création et conception',
      'Matériaux et textures', 
      'Éclairage et ambiances'
    ],
    year2: [
      'Projets d\'aménagement', 
      'Décoration avancée', 
      'Management de projet',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Décorateur d'intérieur", 
      "Architecte d'intérieur", 
      "Designer d'espaces",
      "Consultant en aménagement"
    ],
    brochureUrl: '/brochures/Master_Decoration_Interieur.pdf',
  },
  'master-genie-civil-construction': {
    id: 'master-genie-civil-construction',
    level: 'Master Pro',
    levelStyle: 'red',
    icon: Construction,
    title: 'Master Professionnel Génie Civil - Conception, Construction, Ingénierie du Bâtiment',
    description: "Le parcours Conception Construction Ingénierie du Bâtiment prépare les étudiants aux métiers d'ingénierie du secteur du BTP et de la construction durable.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des ingénieurs en génie civil capables de concevoir, construire et gérer des projets de bâtiment complexes.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en génie civil, BTP ou domaine technique.",
    prereqs: [
      'Licence en génie civil ou BTP.',
      'Expérience dans la construction.',
      'Entretien de sélection.',
    ],
    year1: [
      'Conception de bâtiments', 
      'Construction durable', 
      'Ingénierie du bâtiment',
      'BIM avancé', 
      'Management de projet'
    ],
    year2: [
      'Projets complexes', 
      'Innovation en construction', 
      'Gestion de chantier',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Ingénieur en génie civil", 
      "Chef de projet construction", 
      "Responsable d'ingénierie",
      "Consultant en construction durable"
    ],
    brochureUrl: '/brochures/Master_Genie_Civil_Construction.pdf',
  },
  'master-cybersecurite': {
    id: 'master-cybersecurite',
    level: 'Master Pro',
    levelStyle: 'red-dark',
    icon: Shield,
    title: 'Master Professionnel Cybersécurité et Management des Risques Numériques',
    description: "Formation d'expert en cybersécurité pour analyser, concevoir et mettre en œuvre des stratégies de protection des systèmes d'information.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts en cybersécurité capables de protéger les organisations contre les menaces numériques.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en informatique, réseaux ou sécurité.",
    prereqs: [
      'Licence en informatique ou sécurité.',
      'Expérience en sécurité informatique.',
      'Entretien de sélection.',
    ],
    year1: [
      'Sécurité des systèmes', 
      'Cryptographie', 
      'Audit de sécurité',
      'Gestion des risques', 
      'RGPD et conformité'
    ],
    year2: [
      'Cybersécurité avancée', 
      'Forensic numérique', 
      'Gestion de crise cyber',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Expert en cybersécurité", 
      "Responsable sécurité informatique", 
      "Auditeur sécurité",
      "Consultant en cybersécurité"
    ],
    brochureUrl: '/brochures/Master_Cybersecurite.pdf',
  },
  'master-developpement-durable': {
    id: 'master-developpement-durable',
    level: 'Master Pro',
    levelStyle: 'emerald',
    icon: Leaf,
    title: 'Master Professionnel Développement Durable et Transition Énergétique',
    description: "Programme spécialisé dans la gestion de projets environnementaux et la transition énergétique.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts capables de piloter la transition énergétique et les projets de développement durable.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en environnement, énergie ou ingénierie.",
    prereqs: [
      'Licence en environnement ou énergie.',
      'Expérience en développement durable.',
      'Entretien de sélection.',
    ],
    year1: [
      'Énergies renouvelables', 
      'Gestion environnementale', 
      'Efficacité énergétique',
      'Économie verte', 
      'Politiques environnementales'
    ],
    year2: [
      'Projets durables', 
      'Transition énergétique', 
      'Management environnemental',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Responsable développement durable", 
      "Ingénieur énergies renouvelables", 
      "Consultant environnemental",
      "Chef de projet transition énergétique"
    ],
    brochureUrl: '/brochures/Master_Developpement_Durable.pdf',
  },
  'master-marketing-digital': {
    id: 'master-marketing-digital',
    level: 'Master Pro',
    levelStyle: 'violet',
    icon: TrendingUp,
    title: 'Master Professionnel Marketing Digital et E-Business',
    description: "Formation avancée en stratégies marketing digitales, transformation numérique et e-commerce.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts en marketing digital capables de piloter la transformation numérique des entreprises.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en marketing, communication ou commerce.",
    prereqs: [
      'Licence en marketing ou communication.',
      'Expérience en marketing digital.',
      'Entretien de sélection.',
    ],
    year1: [
      'Stratégies digitales', 
      'SEO/SEA', 
      'Social media marketing',
      'Data marketing', 
      'E-commerce'
    ],
    year2: [
      'Marketing automation', 
      'Growth hacking', 
      'Analytics et ROI',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Responsable marketing digital", 
      "Consultant e-business", 
      "Growth hacker",
      "Directeur de la communication digitale"
    ],
    brochureUrl: '/brochures/Master_Marketing_Digital.pdf',
  },
  'master-rh-transformation-digitale': {
    id: 'master-rh-transformation-digitale',
    level: 'Master Pro',
    levelStyle: 'cyan',
    icon: UserCheck,
    title: 'Master Professionnel Ressources Humaines et Transformation Digitale',
    description: "Programme spécialisé en gestion des ressources humaines à l'ère numérique.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts RH capables de gérer la transformation digitale des organisations.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en ressources humaines, gestion ou psychologie.",
    prereqs: [
      'Licence en RH ou gestion.',
      'Expérience en ressources humaines.',
      'Entretien de sélection.',
    ],
    year1: [
      'Gestion des talents', 
      'SIRH', 
      'Management à distance',
      'Analytics RH', 
      'Droit du travail'
    ],
    year2: [
      'Transformation RH', 
      'Innovation en RH', 
      'Conduite du changement',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Responsable RH", 
      "Consultant en transformation RH", 
      "DRH",
      "Chargé de développement des compétences"
    ],
    brochureUrl: '/brochures/Master_RH_Transformation_Digitale.pdf',
  },
  'master-ia-data-science': {
    id: 'master-ia-data-science',
    level: 'Master Pro',
    levelStyle: 'slate',
    icon: Brain,
    title: 'Master Professionnel Intelligence Artificielle et Data Science',
    description: "Formation d'expert en intelligence artificielle et science des données.",
    stats: [
      { icon: Clock, label: '2 ans' },
      { icon: Monitor, label: 'Mode hybride' },
      { icon: GraduationCap, label: 'Master Pro' },
      { icon: MapPin, label: 'Maroc' },
    ],
    objective: "Former des experts en IA et Data Science capables de développer des solutions innovantes pour l'entreprise.",
    features: [
      { icon: Clock, label: 'Durée', value: '2 ans' },
      { icon: Monitor, label: 'Modalité', value: 'Hybride' },
      { icon: GraduationCap, label: 'Encadrement', value: 'Expert' },
      { icon: Award, label: 'Niveau', value: 'Bac +5' },
    ],
    prereqMain: "Être titulaire d'une Licence en informatique, mathématiques ou statistiques.",
    prereqs: [
      'Licence en informatique ou mathématiques.',
      'Expérience en programmation.',
      'Entretien de sélection.',
    ],
    year1: [
      'Machine Learning', 
      'Deep Learning', 
      'Big Data',
      'Python avancé', 
      'Statistiques avancées'
    ],
    year2: [
      'IA appliquée', 
      'Data engineering', 
      'Innovation IA',
      'Stage pratique', 
      'Mémoire professionnel'
    ],
    careers: [
      "Data Scientist", 
      "Ingénieur IA", 
      "Machine Learning Engineer",
      "Data Analyst senior"
    ],
    brochureUrl: '/brochures/Master_IA_Data_Science.pdf',
  },
};

// ─── Styles dynamiques selon le niveau ────────────────────────────────────────
const heroStyles = {
  cyan: 'from-slate-900 via-cyan-900 to-cyan-700',
  orange: 'from-slate-900 via-orange-900 to-orange-700',
  purple: 'from-slate-900 via-purple-900 to-purple-700',
  blue: 'from-slate-900 via-blue-900 to-blue-700',
  amber: 'from-slate-900 via-amber-900 to-amber-700',
  green: 'from-slate-900 via-green-900 to-green-700',
  indigo: 'from-slate-900 via-indigo-900 to-indigo-700',
  teal: 'from-slate-900 via-teal-900 to-teal-700',
  pink: 'from-slate-900 via-pink-900 to-pink-700',
  red: 'from-slate-900 via-red-900 to-red-700',
  'red-dark': 'from-slate-900 via-red-950 to-red-800',
  emerald: 'from-slate-900 via-emerald-900 to-emerald-700',
  violet: 'from-slate-900 via-violet-900 to-violet-700',
  slate: 'from-slate-900 via-slate-800 to-slate-700',
};

const levelBadgeStyles = {
  cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300',
  orange: 'bg-orange-500/20 border-orange-400/30 text-orange-300',
  purple: 'bg-purple-500/20 border-purple-400/30 text-purple-300',
  blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
  amber: 'bg-amber-500/20 border-amber-400/30 text-amber-300',
  green: 'bg-green-500/20 border-green-400/30 text-green-300',
  indigo: 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300',
  teal: 'bg-teal-500/20 border-teal-400/30 text-teal-300',
  pink: 'bg-pink-500/20 border-pink-400/30 text-pink-300',
  red: 'bg-red-500/20 border-red-400/30 text-red-300',
  'red-dark': 'bg-red-700/20 border-red-600/30 text-red-300',
  emerald: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300',
  violet: 'bg-violet-500/20 border-violet-400/30 text-violet-300',
  slate: 'bg-slate-600/40 border-slate-400/30 text-slate-300',
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
export default function MasterDetails() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const f = masterFormations[slug];

  if (!f) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">404</h1>
          <p className="text-gray-500 mb-6">Master Professionnel introuvable.</p>
          <Link to="/formations" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Voir toutes les formations
          </Link>
        </div>
      </div>
    );
  }

  const HeroIcon = f.icon;
  const levelStyle = heroStyles[f.levelStyle] || heroStyles.slate;
  const badgeStyle = levelBadgeStyles[f.levelStyle] || levelBadgeStyles.slate;

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
            <Link to="/MasterProfessionnel" className="hover:text-white transition-colors">Masters Pro</Link>
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
                  <h2 className="text-lg font-bold text-slate-900">2e année</h2>
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