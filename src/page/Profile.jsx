import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit2, Save, X, Eye, Download, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../config/api';

export default function Profile() {
    const { user: authUser, token, isAuthenticated } = useAuth();
    const [user, setUser] = useState(null);
    const [enrollments, setEnrollments] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({});
    const [activeTab, setActiveTab] = useState('profile');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Vérifier si l'utilisateur est authentifié
        if (!isAuthenticated()) {
            window.location.href = '/login';
            return;
        }
        
        fetchUserData();
        fetchEnrollments();
    }, [isAuthenticated]);

    const fetchUserData = async () => {
        try {
            // Utiliser l'utilisateur du contexte si disponible
            if (authUser) {
                const formattedUser = {
                    id: authUser.id,
                    name: authUser.name || '',
                    email: authUser.email || '',
                    phone: authUser.phone || '',
                    address: authUser.address || '',
                    dateOfBirth: authUser.date_of_birth || '',
                    joinDate: authUser.created_at || new Date().toISOString(),
                    profileImage: authUser.profile_image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                };
                setUser(formattedUser);
                setEditForm(formattedUser);
            }
            
            // Optionnel: Récupérer les données actualisées depuis l'API
            const response = await api.get('/user');
            if (response.data) {
                const formattedUser = {
                    id: response.data.id,
                    name: response.data.name || '',
                    email: response.data.email || '',
                    phone: response.data.phone || '',
                    address: response.data.address || '',
                    dateOfBirth: response.data.date_of_birth || '',
                    joinDate: response.data.created_at || new Date().toISOString(),
                    profileImage: response.data.profile_image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                };
                setUser(formattedUser);
                setEditForm(formattedUser);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données utilisateur:', error);
            if (error.response?.status === 401) {
                window.location.href = '/login';
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchEnrollments = async () => {
        try {
            const response = await api.get('/admin/enrollments');
            let enrollmentsData = [];
            
            if (Array.isArray(response.data)) {
                enrollmentsData = response.data;
            } else if (response.data.data && Array.isArray(response.data.data)) {
                enrollmentsData = response.data.data;
            }
            
            const formattedEnrollments = enrollmentsData.map(enrollment => ({
                id: enrollment.id,
                courseName: enrollment.diploma?.name || enrollment.course_name || "Formation",
                enrollmentDate: enrollment.enrollment_date || enrollment.created_at || new Date().toISOString(),
                status: enrollment.status || "En cours",
                progress: enrollment.progress || 0,
                instructor: enrollment.instructor || "À déterminer",
                duration: enrollment.diploma?.duration_years + " ans" || "Non spécifié",
                nextClass: enrollment.next_class_date || null,
                completionDate: enrollment.completed_at || null,
                grade: enrollment.grade || null,
                documents: enrollment.documents || []
            }));
            
            setEnrollments(formattedEnrollments);
        } catch (error) {
            console.error('Erreur lors du chargement des inscriptions:', error);
            setEnrollments([]);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            await api.put('/user', {
                name: editForm.name,
                email: editForm.email,
                phone: editForm.phone,
                address: editForm.address,
                date_of_birth: editForm.dateOfBirth
            });
            
            setUser(editForm);
            setIsEditing(false);
            alert('Profil mis à jour avec succès !');
        } catch (error) {
            console.error('Erreur lors de la mise à jour:', error);
            alert('Erreur lors de la mise à jour du profil');
        }
    };

    const handleCancel = () => {
        setEditForm(user);
        setIsEditing(false);
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'en cours':
            case 'active':
                return 'bg-blue-100 text-blue-800';
            case 'terminé':
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'en attente':
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
            case 'en cours':
            case 'active':
                return <Clock className="w-4 h-4" />;
            case 'terminé':
            case 'completed':
                return <CheckCircle className="w-4 h-4" />;
            case 'en attente':
            case 'pending':
                return <Eye className="w-4 h-4" />;
            default:
                return <BookOpen className="w-4 h-4" />;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">Chargement...</p>
                </div>
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
                                    <span>{user.phone || 'Non renseigné'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{user.address || 'Non renseigné'}</span>
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
                                Mes inscriptions ({enrollments.length})
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
                                        <p className="text-gray-900">{user.phone || 'Non renseigné'}</p>
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
                                        <p className="text-gray-900">
                                            {user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString('fr-FR') : 'Non renseigné'}
                                        </p>
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
                                        <p className="text-gray-900">{user.address || 'Non renseigné'}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Enrollments Tab */}
                    {activeTab === 'enrollments' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes inscriptions</h2>
                            
                            {enrollments.length === 0 ? (
                                <div className="text-center py-12">
                                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500">Vous n'êtes inscrit à aucune formation pour le moment.</p>
                                </div>
                            ) : (
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
                                                {enrollment.nextClass && (
                                                    <div>
                                                        <p className="text-sm text-gray-500">Prochain cours</p>
                                                        <p className="font-medium">{new Date(enrollment.nextClass).toLocaleDateString('fr-FR')}</p>
                                                    </div>
                                                )}
                                                {enrollment.completionDate && (
                                                    <div>
                                                        <p className="text-sm text-gray-500">Date de fin</p>
                                                        <p className="font-medium">{new Date(enrollment.completionDate).toLocaleDateString('fr-FR')}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {enrollment.progress > 0 && (
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
                                            )}

                                            {enrollment.grade && (
                                                <div className="mb-4">
                                                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                        <Award className="w-4 h-4" />
                                                        {enrollment.grade}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Documents Tab */}
                    {activeTab === 'documents' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes documents</h2>
                            <div className="text-center py-12">
                                <Download className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">Fonctionnalité à venir</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}