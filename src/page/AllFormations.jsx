// src/pages/AllFormations.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  ChevronDown,
  Globe,
  HardHat,
  Database,
  Calculator,
  Briefcase,
  FileText,
  Building,
  Brain,
  Users,
  Award,
  Banknote,
  Palette,
  Construction,
  Shield,
  Leaf,
  TrendingUp,
  UserCheck,
  BookOpen,
  Monitor,
  Truck,
  Hotel,
  Settings,
  Wifi,
  Zap,
  CircuitBoard,
  Code,
  MapPin,
  Compass,
  Clock,
  Star,
  ArrowRight
} from 'lucide-react';

const AllFormations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Toutes les formations regroupées
  const allFormations = [
    // --- TECHNICIEN ---
    {
      id: 't1',
      title: "Technicien Aide Comptable",
      description: "Le Programme d'aide comptable va à l'essentiel des compétences à maîtriser. Il se concentre sur la comptabilité générale, les opérations courantes et opérations d'inventaires...",
      icon: <BookOpen className="w-6 h-6" />,
      level: "Technicien",
      category: "Comptabilité",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      image: "https://fiep-education.fr/assets/IMG/technicien/aide%20comptable/3170.jpg",
      link: "/techaidecomptable"
    },
    {
      id: 't2',
      title: "Chef de chantiers travaux publics",
      description: "Le Technicien Chef de Chantier TP a pour mission d'encadrer une ou plusieurs équipes de 15 à 20 personnes...",
      icon: <Building className="w-6 h-6" />,
      level: "Technicien",
      category: "BTP",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://th.bing.com/th/id/OIP.ZjiScRufl2sIZ3UADhSWRAHaE8?w=235&h=180&c=7&r=0&o=5&pid=1.7",
      link: "/technicien"
    },
    {
      id: 't3',
      title: "Technicien Commercial",
      description: "Le programme de formation commerciale intègre les nouveaux enjeux concernant le métier commercial...",
      icon: <Users className="w-6 h-6" />,
      level: "Technicien",
      category: "Commerce",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/technicien"
    },
    {
      id: 't4',
      title: "Dessinateur de bâtiment",
      description: "A l'issue de la formation, le lauréat est capable de réaliser les opérations et les activités suivantes...",
      icon: <Palette className="w-6 h-6" />,
      level: "Technicien",
      category: "Design",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/technicien"
    },
    {
      id: 't5',
      title: "Technicien en informatique",
      description: "Le programme Informatique de gestion vise à former des personnes aptes à exercer la profession de programmeur-analyste...",
      icon: <Monitor className="w-6 h-6" />,
      level: "Technicien",
      category: "Informatique",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/technicien"
    },
    {
      id: 't6',
      title: "Technicien Logistique",
      description: "Le Technicien en Logistique est chargé des opérations de réception, de mise en stock, de préparation des commandes et d'expédition...",
      icon: <Truck className="w-6 h-6" />,
      level: "Technicien",
      category: "Logistique",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/technicien"
    },
    {
      id: 't7',
      title: "Technicien Réception d'hôtel",
      description: "Conçue sous forme modulaire, cette formation prépare aux diverses carrières dans plusieurs secteurs d'activités, principalement le tourisme...",
      icon: <Hotel className="w-6 h-6" />,
      level: "Technicien",
      category: "Tourisme",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/technicien"
    },
    {
      id: 't8',
      title: "Technicien en Maintenance Industrielle",
      description: "Formation complète en maintenance préventive et corrective des équipements industriels...",
      icon: <Settings className="w-6 h-6" />,
      level: "Technicien",
      category: "Industrie",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      link: "/technicien"
    },
    {
      id: 't9',
      title: "Technicien Réseaux et Télécommunications",
      description: "Spécialisation dans l'installation, la configuration et la maintenance des réseaux informatiques...",
      icon: <Wifi className="w-6 h-6" />,
      level: "Technicien",
      category: "Informatique",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      link: "/technicien"
    },
    {
      id: 't10',
      title: "Technicien en Génie Civil",
      description: "Formation aux techniques de construction, étude de sols, calcul de structures et gestion de projets BTP...",
      icon: <HardHat className="w-6 h-6" />,
      level: "Technicien",
      category: "BTP",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      link: "/technicien"
    },
    {
      id: 't11',
      title: "Technicien en Énergies Renouvelables",
      description: "Spécialiste de l'installation et maintenance des systèmes solaires, éoliens et autres technologies vertes...",
      icon: <Zap className="w-6 h-6" />,
      level: "Technicien",
      category: "Énergie",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
      link: "/technicien"
    },
    {
      id: 't12',
      title: "Technicien en Électronique Industrielle",
      description: "Maîtrise des systèmes électroniques industriels, automatismes et programmation d'automates...",
      icon: <CircuitBoard className="w-6 h-6" />,
      level: "Technicien",
      category: "Industrie",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.pexels.com/photos/32588544/pexels-photo-32588544.jpeg",
      link: "/technicien"
    },

    // --- TECHNICIEN SUPÉRIEUR ---
    {
      id: 'ts1',
      title: "Technicien Supérieur Conducteur de travaux : travaux publics",
      description: "A l'issue de la formation, le lauréat sera en mesure d'exécuter les activités suivantes : Analyser les aspects techniques et administratifs...",
      icon: <Building className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "BTP",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts2',
      title: "Technicien Supérieur en développement Informatique",
      description: "Les buts de la formation en TSDI, sont définis à partir des buts généraux de la formation professionnelle...",
      icon: <Code className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Informatique",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts3',
      title: "Technicien supérieur Financier comptable",
      description: "S'intégrer harmonieusement au milieu de travail. Destiné à former des techniciens Supérieurs capables d'appliquer les procédures de base en finance et comptabilité...",
      icon: <Calculator className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Comptabilité",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts4',
      title: "Technicien Supérieur en gestion des entreprises",
      description: "A l'issue de la formation, le lauréat sera en mesure d'exécuter les activités suivantes : Réaliser la maquette du produit...",
      icon: <Briefcase className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Management",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts5',
      title: "Technicien supérieur Infographie",
      description: "Destiné à former des techniciens Supérieur capables d'appliquer les procédures de base en gestion des entreprises...",
      icon: <Palette className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Design",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts6',
      title: "Technicien Supérieur en Maintenance Industrielle",
      description: "Formation avancée en maintenance préventive et prédictive des équipements industriels...",
      icon: <Settings className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Industrie",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts7',
      title: "Technicien Supérieur en Réseaux et Sécurité Informatique",
      description: "Spécialisation en administration des réseaux complexes, cybersécurité et protection des données...",
      icon: <Shield className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Informatique",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts8',
      title: "Technicien Supérieur en Énergies Renouvelables et Efficacité Énergétique",
      description: "Formation approfondie en conception et gestion de projets d'énergies renouvelables...",
      icon: <Zap className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Énergie",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts9',
      title: "Technicien Supérieur en Géomatique et Topographie",
      description: "Maîtrise des systèmes d'information géographique (SIG), télédétection et techniques de levés topographiques avancés...",
      icon: <MapPin className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Géomatique",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },
    {
      id: 'ts10',
      title: "Technicien Supérieur en Marketing Digital et E-commerce",
      description: "Formation complète en stratégies marketing digitales, gestion de campagnes publicitaires en ligne...",
      icon: <TrendingUp className="w-6 h-6" />,
      level: "Technicien Supérieur",
      category: "Marketing",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/TechnicienSuperieur"
    },

    // --- LICENCES PROFESSIONNELLES ---
    {
      id: 'lp1',
      title: "Licence Professionnelle en Géomatique et Ingénierie Topographique",
      description: "Formez-vous aux métiers de la géomatique et de l'ingénierie topographique. Maîtrisez les technologies géospatiales...",
      icon: <Globe className="w-6 h-6" />,
      level: "Licence Pro",
      category: "Géomatique",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/LicenceProfessionnelle",
      isFeatured: true
    },
    {
      id: 'lp2',
      title: "Licence Professionnelle en Génie Civil et Ingénierie Topographique",
      description: "Acquérez les compétences nécessaires pour concevoir, gérer et réaliser des projets d'infrastructure et de construction...",
      icon: <HardHat className="w-6 h-6" />,
      level: "Licence Pro",
      category: "Génie Civil",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/LicenceProfessionnelle",
      isFeatured: true
    },
    {
      id: 'lp3',
      title: "Licence Professionnelle Administration de Base de Donnée & Technologies WEB",
      description: "L'objectif de cette licence professionnelle est la formation de développeurs spécialistes des nouvelles technologies...",
      icon: <Database className="w-6 h-6" />,
      level: "Licence Pro",
      category: "Technologie",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/LicenceProfessionnelle"
    },
    {
      id: 'lp4',
      title: "Licence Professionnelle Comptabilité, Finance, Audit",
      description: "Cette formation a pour objectifs de former des compétences capables de participer au Management des Organisations...",
      icon: <Calculator className="w-6 h-6" />,
      level: "Licence Pro",
      category: "Finance",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/LicenceProfessionnelle"
    },
    {
      id: 'lp5',
      title: "Licence Professionnelle Gestion des Entreprises",
      description: "La licence Gestion des entreprises est une formation à la fois délibérément généraliste et résolument tournée vers le monde professionnel...",
      icon: <Briefcase className="w-6 h-6" />,
      level: "Licence Pro",
      category: "Management",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/LicenceProfessionnelle"
    },
    {
      id: 'lp6',
      title: "Licence Professionnelle Métiers du Notariat",
      description: "Pendant la licence professionnelle en entrepreneuriat, les étudiants sont formés à la création et à la gestion d'une entreprise...",
      icon: <FileText className="w-6 h-6" />,
      level: "Licence Pro",
      category: "Juridique",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/LicenceProfessionnelle"
    },
    {
      id: 'lp7',
      title: "Licence Professionnelle Génie Civil",
      description: "Cette formation permettra aux étudiants d'acquérir les compétences suivantes : Connaissance des différents types de matériaux de construction...",
      icon: <Building className="w-6 h-6" />,
      level: "Licence Pro",
      category: "Ingénierie",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/LicenceProfessionnelle"
    },

    // --- MASTERS PROFESSIONNELS ---
    {
      id: 'mp1',
      title: "Master Professionnel en Géomatique et Ingénierie Topographique",
      description: "Formation d'excellence en géomatique et ingénierie topographique. Maîtrise des systèmes d'information géographique (SIG)...",
      icon: <Globe className="w-6 h-6" />,
      level: "Master Pro",
      category: "Géomatique",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel",
      isFeatured: true
    },
    {
      id: 'mp2',
      title: "Master Professionnel en Génie Civil et Ingénierie Topographique",
      description: "Programme avancé en génie civil et ingénierie topographique. Formation aux techniques de conception, calcul de structures...",
      icon: <HardHat className="w-6 h-6" />,
      level: "Master Pro",
      category: "Génie Civil",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel",
      isFeatured: true
    },
    {
      id: 'mp3',
      title: "Master Professionnel Psychopraticien",
      description: "Formation spécialisée en psychopratique permettant d'acquérir les compétences nécessaires pour accompagner les individus...",
      icon: <Brain className="w-6 h-6" />,
      level: "Master Pro",
      category: "Psychologie",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp4',
      title: "Master Professionnel Coach Top Management",
      description: "Programme de formation avancée pour développer les compétences en coaching de dirigeants et de cadres supérieurs...",
      icon: <Users className="w-6 h-6" />,
      level: "Master Pro",
      category: "Management",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp5',
      title: "Master Professionnel Expert Coach",
      description: "Formation d'excellence pour devenir expert en coaching professionnel avec une expertise approfondie...",
      icon: <Award className="w-6 h-6" />,
      level: "Master Pro",
      category: "Coaching",
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp6',
      title: "Master Professionnel Banque Privée Internationale",
      description: "Former des professionnels aptes à prendre en charge un portefeuille de clientèles haut de gamme...",
      icon: <Banknote className="w-6 h-6" />,
      level: "Master Pro",
      category: "Finance",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp7',
      title: "Master Professionnel Comptabilité, Contrôle de Gestion, Audit",
      description: "Le Master forme en deux années des spécialistes de la comptabilité, du contrôle de gestion et de l'audit...",
      icon: <Calculator className="w-6 h-6" />,
      level: "Master Pro",
      category: "Finance",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp8',
      title: "Master Professionnel Chargé d'Affaires Entreprises et Institutions",
      description: "Le Master Chargé d'affaires est un cursus entièrement échelonné sur deux années pour former des experts en relation client B2B...",
      icon: <Building className="w-6 h-6" />,
      level: "Master Pro",
      category: "Business",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp9',
      title: "Master Professionnel Décoration d'Intérieur",
      description: "Le Master en Décoration intérieure se déroule en 2 ans et s'adresse aux créatifs passionnés par l'aménagement d'espaces...",
      icon: <Palette className="w-6 h-6" />,
      level: "Master Pro",
      category: "Design",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp10',
      title: "Master Professionnel Génie Civil - Conception, Construction, Ingénierie du Bâtiment",
      description: "Le parcours Conception Construction Ingénierie du Bâtiment prépare les étudiants aux métiers d'ingénierie du secteur du BTP...",
      icon: <Construction className="w-6 h-6" />,
      level: "Master Pro",
      category: "Ingénierie",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp11',
      title: "Master Professionnel Cybersécurité et Management des Risques Numériques",
      description: "Formation d'expert en cybersécurité pour analyser, concevoir et mettre en œuvre des stratégies de protection des systèmes d'information...",
      icon: <Shield className="w-6 h-6" />,
      level: "Master Pro",
      category: "Informatique",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp12',
      title: "Master Professionnel Développement Durable et Transition Énergétique",
      description: "Programme spécialisé dans la gestion de projets environnementaux et la transition énergétique...",
      icon: <Leaf className="w-6 h-6" />,
      level: "Master Pro",
      category: "Environnement",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp13',
      title: "Master Professionnel Marketing Digital et E-Business",
      description: "Formation avancée en stratégies marketing digitales, transformation numérique et e-commerce...",
      icon: <TrendingUp className="w-6 h-6" />,
      level: "Master Pro",
      category: "Marketing",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      textColor: "text-violet-700",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp14',
      title: "Master Professionnel Ressources Humaines et Transformation Digitale",
      description: "Programme spécialisé en gestion des ressources humaines à l'ère numérique...",
      icon: <UserCheck className="w-6 h-6" />,
      level: "Master Pro",
      category: "Ressources Humaines",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    },
    {
      id: 'mp15',
      title: "Master Professionnel Intelligence Artificielle et Data Science",
      description: "Formation d'expert en intelligence artificielle et science des données...",
      icon: <Brain className="w-6 h-6" />,
      level: "Master Pro",
      category: "Intelligence Artificielle",
      color: "from-slate-500 to-gray-600",
      bgColor: "bg-slate-50",
      textColor: "text-slate-700",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/MasterProfessionnel"
    }
  ];

  // Filtrer les formations
  const filteredFormations = allFormations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formation.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || formation.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  // Obtenir les niveaux et catégories uniques
  const levels = ['all', ...new Set(allFormations.map(f => f.level))];
  const categories = ['all', ...new Set(allFormations.map(f => f.category))];

  // Compter par niveau
  const getLevelCount = (level) => {
    if (level === 'all') return allFormations.length;
    return allFormations.filter(f => f.level === level).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 transform -translate-x-48 translate-y-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Formations
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos programmes de formation, du Technicien au Master Professionnel
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">{allFormations.length} formations</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">4 formations phares</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <div className="sticky top-0 z-20 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'Tous les niveaux' : level} ({getLevelCount(level)})
                  </option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Toutes les catégories</option>
                {categories.filter(c => c !== 'all').sort().map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-gray-600">
          {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} trouvée{filteredFormations.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Formations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFormations.map((formation) => (
            <div
              key={formation.id}
              className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                formation.isFeatured ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {formation.isFeatured && (
                <div className="relative z-10">
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Formation phare
                    </span>
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${formation.color} opacity-60`}></div>
                
                {/* Level Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {formation.level}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <div className="text-white">
                    {formation.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 min-h-[48px]">
                  {formation.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {formation.description}
                </p>
                
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${formation.bgColor} ${formation.textColor}`}>
                    {formation.category}
                  </span>
                </div>

                {/* Button */}
                <Link to={formation.link} className="block">
                  <button className={`w-full bg-gradient-to-r ${formation.color} text-white py-2 px-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2`}>
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFormations.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucune formation trouvée</h3>
            <p className="text-gray-600">
              Essayez de modifier vos critères de recherche ou de filtres.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous pour un conseil personnalisé sur votre projet de formation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Nous contacter
              </button>
            </Link>
            <Link to="/VAE">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                En savoir plus sur la VAE
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllFormations;