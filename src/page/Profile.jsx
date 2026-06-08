import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit2, Save, X, Eye, Download, Clock, CheckCircle } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [enrollments, setEnrollments] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({});
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        // Simulate fetching user data
        fetchUserData();
        fetchEnrollments();
    }, []);

    const fetchUserData = () => {
        // Replace with actual API call
        const userData = {
            id: 1,
            name: "Jean Dupont",
            email: "jean.dupont@email.com",
            phone: "+33 6 12 34 56 78",
            address: "123 Rue de la Paix, 75001 Paris",
            dateOfBirth: "1990-05-15",
            joinDate: "2024-01-15",
            profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        };
        setUser(userData);
        setEditForm(userData);
    };

    const fetchEnrollments = () => {
        // Replace with actual API call
        const enrollmentData = [
            {
                id: 1,
                courseName: "Master Professionnel Cybersécurité",
                enrollmentDate: "2024-01-15",
                status: "En cours",
                progress: 65,
                instructor: "Dr. Marie Martin",
                duration: "24 mois",
                nextClass: "2024-06-25",
                documents: [
                    { name: "Certificat d'inscription", type: "PDF", url: "#" },
                    { name: "Programme de cours", type: "PDF", url: "#" }
                ]
            },
            {
                id: 2,
                courseName: "Technicien Supérieur en Réseaux",
                enrollmentDate: "2023-09-10",
                status: "Terminé",
                progress: 100,
                instructor: "Prof. Pierre Durand",
                duration: "18 mois",
                completionDate: "2024-03-10",
                grade: "Mention Bien",
                documents: [
                    { name: "Diplôme", type: "PDF", url: "#" },
                    { name: "Relevé de notes", type: "PDF", url: "#" }
                ]
            },
            {
                id: 3,
                courseName: "Formation VAE Comptabilité",
                enrollmentDate: "2024-03-01",
                status: "En attente",
                progress: 20,
                instructor: "Mme. Sophie Bernard",
                duration: "12 mois",
                nextClass: "2024-07-01",
                documents: [
                    { name: "Dossier VAE", type: "PDF", url: "#" }
                ]
            }
        ];
        setEnrollments(enrollmentData);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // API call to update user data
        setUser(editForm);
        setIsEditing(false);
        // Show success message
    };

    const handleCancel = () => {
        setEditForm(user);
        setIsEditing(false);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'En cours': return 'bg-blue-100 text-blue-800';
            case 'Terminé': return 'bg-green-100 text-green-800';
            case 'En attente': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'En cours': return <Clock className="w-4 h-4" />;
            case 'Terminé': return <CheckCircle className="w-4 h-4" />;
            case 'En attente': return <Eye className="w-4 h-4" />;
            default: return <BookOpen className="w-4 h-4" />;
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="relative">
                            <img
                                src={user.profileImage}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                            />
                            <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2">
                                <User className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                            <p className="text-gray-600 mb-4">Étudiant IFDCE</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>{user.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{user.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{user.address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Membre depuis {new Date(user.joinDate).toLocaleDateString('fr-FR')}</span>
                                </div>
                            </div>
                        </div>
                        
                        <button
                            onClick={handleEdit}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                            <Edit2 className="w-4 h-4" />
                            Modifier le profil
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-xl shadow-lg mb-8">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'profile'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Informations personnelles
                            </button>
                            <button
                                onClick={() => setActiveTab('enrollments')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'enrollments'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Mes inscriptions
                            </button>
                            <button
                                onClick={() => setActiveTab('documents')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'documents'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Documents
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Informations personnelles</h2>
                                {isEditing && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleSave}
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                                        >
                                            <Save className="w-4 h-4" />
                                            Sauvegarder
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                                        >
                                            <X className="w-4 h-4" />
                                            Annuler
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editForm.name}
                                            onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{user.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={editForm.email}
                                            onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{user.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            value={editForm.phone}
                                            onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{user.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            value={editForm.dateOfBirth}
                                            onChange={(e) => setEditForm({...editForm, dateOfBirth: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{new Date(user.dateOfBirth).toLocaleDateString('fr-FR')}</p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                                    {isEditing ? (
                                        <textarea
                                            value={editForm.address}
                                            onChange={(e) => setEditForm({...editForm, address: e.target.value})}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{user.address}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Enrollments Tab */}
                    {activeTab === 'enrollments' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes inscriptions</h2>
                            
                            <div className="space-y-6">
                                {enrollments.map((enrollment) => (
                                    <div key={enrollment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{enrollment.courseName}</h3>
                                                <p className="text-gray-600">Instructeur: {enrollment.instructor}</p>
                                            </div>
                                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                                                {getStatusIcon(enrollment.status)}
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(enrollment.status)}`}>
                                                    {enrollment.status}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Date d'inscription</p>
                                                <p className="font-medium">{new Date(enrollment.enrollmentDate).toLocaleDateString('fr-FR')}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Durée</p>
                                                <p className="font-medium">{enrollment.duration}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    {enrollment.status === 'Terminé' ? 'Date de fin' : 'Prochain cours'}
                                                </p>
                                                <p className="font-medium">
                                                    {enrollment.status === 'Terminé' 
                                                        ? new Date(enrollment.completionDate).toLocaleDateString('fr-FR')
                                                        : new Date(enrollment.nextClass).toLocaleDateString('fr-FR')
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm text-gray-600">Progression</span>
                                                <span className="text-sm font-medium text-gray-900">{enrollment.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${enrollment.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {enrollment.grade && (
                                            <div className="mb-4">
                                                <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    <Award className="w-4 h-4" />
                                                    {enrollment.grade}
                                                </span>
                                            </div>
                                        )}

                                        {/* Documents */}
                                        <div>
                                            <p className="text-sm text-gray-600 mb-2">Documents disponibles:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {enrollment.documents.map((doc, index) => (
                                                    <button
                                                        key={index}
                                                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm transition-colors"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        {doc.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Documents Tab */}
                    {activeTab === 'documents' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes documents</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {enrollments.flatMap(enrollment => 
                                    enrollment.documents.map((doc, index) => (
                                        <div key={`${enrollment.id}-${index}`} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="bg-red-100 p-2 rounded-lg">
                                                    <Download className="w-6 h-6 text-red-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900">{doc.name}</h3>
                                                    <p className="text-sm text-gray-500">{enrollment.courseName}</p>
                                                </div>
                                            </div>
                                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                                                Télécharger
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      
    );
}