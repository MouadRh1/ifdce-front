import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ifdclogo from "../assets/logofdce.png";
import technicien from "../assets/icons8-tuition-30.png";
import techsp from "../assets/icons8-graduation-cap-50.png";
import license from "../assets/icons8-graduation-scroll-50.png";
import vaeicon from "../assets/icons8-graduation-scroll-100.png";
import master from "../assets/icons8-internship-50 (1).png";
import ifdce from "../assets/ifdcedark-removebg-preview.png";
import { useNavbar } from '../context/NavbarContext';

import { 
    ChevronDown, 
    Menu, 
    X, 
    GraduationCap, 
    User, 
    Settings, 
    LogOut,
    Home,
    Phone,
    Info,
    Shield
} from "lucide-react";

export default function Navbar() {
     const { showDiplomDropdown, setShowDiplomDropdown } = useNavbar();
    const [isOpen, setIsOpen] = useState(false);
    const [showAdminDropdown, setShowAdminDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    // const [showDiplomDropdown, setShowDiplomDropdown] = useState(false);
    const [showMobileDiplomDropdown, setShowMobileDiplomDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const location = useLocation();
    const { user, isAuthenticated, isAdmin, logout } = useAuth();
    
    const mobileMenuRef = useRef(null);
    const diplomDropdownRef = useRef(null);
    const adminDropdownRef = useRef(null);
    const userDropdownRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setShowMobileDiplomDropdown(false);
        setShowAdminDropdown(false);
        setShowUserDropdown(false);
    }, [location]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (diplomDropdownRef.current && !diplomDropdownRef.current.contains(event.target)) {
                setShowDiplomDropdown(false);
            }
            if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
                setShowAdminDropdown(false);
            }
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setShowUserDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isActive = (path) => location.pathname === path;

    const handleLogout = async () => {
        try {
            await logout();
            setShowUserDropdown(false);
            setShowAdminDropdown(false);
            setShowDiplomDropdown(false);
            setIsOpen(false);
            alert('You have been logged out successfully.');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const diplomaItems = [
        { path: "/Technicien", name: "Technicien", icon: technicien },
        { path: "/TechnicienSuperieur", name: "Technicien Supérieur", icon: license },
        { path: "/LicenceProfessionnelle", name: "Licence Professionnelle", icon: techsp },
        { path: "/MasterProfessionnel", name: "Master Professionnel", icon: master },
        { path: "/VAEPage", name: "VAE", icon: vaeicon },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b ' 
                : 'bg-gray-800 shadow-lg border-b '
        }`}>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link 
                        to="/" 
                        className="flex items-center space-x-3 flex-shrink-0 group"
                    >
                       {scrolled 
    ? <img src={ifdce} alt="IFDC Logo" className="h-30 w-auto transition-transform duration-200 group-hover:scale-105" />
    : <img src={ifdclogo} alt="IFDC Logo" className="h-10 w-auto transition-transform duration-200 group-hover:scale-105" />
}
                            
                        
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-1">
                            {/* Main Navigation */}
                            <Link
                                to="/"
                                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive('/') 
                                        ? 'text-blue-700 bg-blue-50 shadow-sm' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                <Home className="w-4 h-4 mr-2" />
                                Accueil
                            </Link>
                            
                            <Link
                                to="/about"
                                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive('/about') 
                                        ? 'text-blue-700 bg-blue-50 shadow-sm' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                <Info className="w-4 h-4 mr-2" />
                                IFDCE
                            </Link>

                            {/* Diplomas Dropdown */}
                            <div className="relative" ref={diplomDropdownRef}>
                                <button
                                    onMouseEnter={() => setShowDiplomDropdown(true)}
                                    onClick={() => setShowDiplomDropdown(!showDiplomDropdown)}
                                    className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all duration-200"
                                >
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    Diplômes
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showDiplomDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Desktop Dropdown */}
                                {showDiplomDropdown && (
                                    <div 
                                        className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                                        onMouseLeave={() => setShowDiplomDropdown(false)}
                                    >
                                        <div className="py-2">
                                            {diplomaItems.map((item, index) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                                                    onClick={() => setShowDiplomDropdown(false)}
                                                >
                                                    <span className="text-lg mr-3">
                                                        <img width={24} src={item.icon} alt="" />
                                                    </span>
                                                    <div>
                                                        <div className="font-medium">{item.name}</div>
                                                        <div className="text-xs text-gray-500">Formation professionnelle</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/contact"
                                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive('/contact') 
                                        ? 'text-blue-700 bg-blue-50 shadow-sm' 
                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                }`}
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Contact
                            </Link>

                            {/* Admin Dropdown - Fixed */}
                            {isAuthenticated() && isAdmin() && (
                                <div className="relative" ref={adminDropdownRef}>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowAdminDropdown(!showAdminDropdown);
                                        }}
                                        className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <Shield className="w-4 h-4 mr-2" />
                                        Admin
                                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showAdminDropdown ? 'rotate-180' : ''}`} />
                                    </button>

                                    {showAdminDropdown && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                                            <div className="py-2">
                                                <Link
                                                    to="/admin-dashboard"
                                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowAdminDropdown(false);
                                                    }}
                                                >
                                                    <Settings className="w-4 h-4 mr-3" />
                                                    Admin Dashboard
                                                </Link>
                                                <Link
                                                    to="/diploma-dashboard"
                                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowAdminDropdown(false);
                                                    }}
                                                >
                                                    <GraduationCap className="w-4 h-4 mr-3" />
                                                    Diploma Dashboard
                                                </Link>
                                                <Link
                                                    to="/field-dashboard"
                                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowAdminDropdown(false);
                                                    }}
                                                >
                                                    <Settings className="w-4 h-4 mr-3" />
                                                    Field Management
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center space-x-3">
                        {isAuthenticated() ? (
                            <div className="relative" ref={userDropdownRef}>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setShowUserDropdown(!showUserDropdown);
                                    }}
                                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                                        <span className="text-white text-sm font-medium">
                                            {user?.name?.charAt(0)?.toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="hidden md:block">{user?.name}</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showUserDropdown && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                                        <div className="py-2">
                                            <div className="px-4 py-3 border-b border-gray-100">
                                                <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                                                <div className="text-xs text-gray-500">{user?.email}</div>
                                            </div>
                                            <Link
                                                to="/profile"
                                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowUserDropdown(false);
                                                }}
                                            >
                                                <User className="w-4 h-4 mr-3" />
                                                Profile
                                            </Link>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleLogout();
                                                }}
                                                className="flex items-center w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                                            >
                                                <LogOut className="w-4 h-4 mr-3" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/login"
                                    className="text-gray-700 hover:text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                >
                                    Se connecter
                                </Link>
                                <Link
                                    to="/authentification"
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                                >
                                    Inscrivez-vous
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <Menu className="block h-6 w-6" />
                            ) : (
                                <X className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Enhanced Mobile Navigation Menu */}
                <div 
                    ref={mobileMenuRef}
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200">
                        {/* Mobile Navigation Links */}
                        <Link
                            to="/"
                            className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                isActive('/') 
                                    ? 'text-blue-700 bg-blue-50 border-l-4 border-blue-500' 
                                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                            }`}
                        >
                            <Home className="w-5 h-5 mr-3" />
                            Accueil
                        </Link>
                        
                        <Link
                            to="/about"
                            className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                isActive('/about') 
                                    ? 'text-blue-700 bg-blue-50 border-l-4 border-blue-500' 
                                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                            }`}
                        >
                            <Info className="w-5 h-5 mr-3" />
                            IFDCE
                        </Link>

                        {/* Mobile Diplomas Section */}
                        <div>
                            <button
                                onClick={() => setShowMobileDiplomDropdown(!showMobileDiplomDropdown)}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all duration-200"
                            >
                                <div className="flex items-center">
                                    <GraduationCap className="w-5 h-5 mr-3" />
                                    Diplômes
                                </div>
                                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${showMobileDiplomDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-200 ${
                                showMobileDiplomDropdown ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="ml-6 mt-2 space-y-1">
                                    {diplomaItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="flex items-center px-4 py-3 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                                        >
                                            <span className="text-base mr-3">
                                                <img width={20} src={item.icon} alt="" />
                                            </span>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                isActive('/contact') 
                                    ? 'text-blue-700 bg-blue-50 border-l-4 border-blue-500' 
                                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                            }`}
                        >
                            <Phone className="w-5 h-5 mr-3" />
                            Contact
                        </Link>

                        {/* Mobile Admin Section - Fixed */}
                        {isAuthenticated() && isAdmin() && (
                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Administration
                                </div>
                                
                                <Link
                                    to="/admin-dashboard"
                                    className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Settings className="w-5 h-5 mr-3" />
                                    Admin Dashboard
                                </Link>
                                
                                <Link
                                    to="/diploma-dashboard"
                                    className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <GraduationCap className="w-5 h-5 mr-3" />
                                    Diploma Dashboard
                                </Link>
                                
                                <Link
                                    to="/field-dashboard"
                                    className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Settings className="w-5 h-5 mr-3" />
                                    Field Management
                                </Link>
                            </div>
                        )}

                        {/* Mobile Auth Section */}
                        <div className="border-t border-gray-200 pt-4 mt-4">
                            {isAuthenticated() ? (
                                <div className="space-y-2">
                                    <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-medium">
                                                {user?.name?.charAt(0)?.toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                                            <div className="text-xs text-gray-500">{user?.email}</div>
                                        </div>
                                    </div>
                                    <Link
                                        to="/profile"
                                        className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <User className="w-5 h-5 mr-3" />
                                        Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                                    >
                                        <LogOut className="w-5 h-5 mr-3" />
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <Link
                                        to="/login"
                                        className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Se connecter
                                    </Link>
                                    <Link
                                        to="/authentification"
                                        className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Inscrivez-vous
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}