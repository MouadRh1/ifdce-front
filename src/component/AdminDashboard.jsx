// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import { useAdminData } from '../hooks/useAdminData';
import StatsCards from './StatsCards';
import UsersTab from './UsersTab';
import EnrollmentsTab from './EnrollmentsTab';
import ContactsTab from './ContactsTab';
import VAETab from './VAETab';
import UserApplicationsModal from './UsersApplicationModal';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('users');
    const [currentPage, setCurrentPage] = useState(1);

    const {
        stats, users, enrollments, contacts, contactStats,
        vaeRequests, vaeStats,
        loading, authLoading, error, toast,
        selectedUser, userApplications, showAppModal,
        setShowAppModal, setSelectedUser, setUserApplications,
        user, isAdmin, logout,
        fetchUsers, fetchEnrollments, fetchContacts, fetchContactStats,
        fetchVAERequests, fetchVAEStats,
        fetchUserApplications,
        updateApplicationStatus, updateContactStatus, updateVAEStatus, addVAENotes,
        deleteContact, deleteVAERequest,
        updateUserRole, deleteUser,
    } = useAdminData();

    /* ── Loading / Access guards ── */
    if (authLoading || loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
                    <div className="text-gray-600">Chargement du tableau de bord...</div>
                </div>
            </div>
        );
    }

    if (!user || !isAdmin()) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                    <div className="text-red-500 text-5xl mb-4">⛔</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Accès refusé</h2>
                    <p className="text-gray-600">Vous n'avez pas les droits nécessaires.</p>
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            </div>
        );
    }

    /* ── Handlers passed down to tabs ── */
    const handleUserSearch = (search, role) => {
        setCurrentPage(1);
        fetchUsers(1, search, role);
    };

    const handleEnrollmentSearch = (filters) => {
        setCurrentPage(1);
        fetchEnrollments(1, filters);
    };

    const handleContactSearch = (search, status) => {
        setCurrentPage(1);
        fetchContacts(1, search, status);
    };

    const handleVAESearch = (search, status) => {
        setCurrentPage(1);
        fetchVAERequests(1, search, status);
    };

    const closeModal = () => {
        setShowAppModal(false);
        setSelectedUser(null);
        setUserApplications([]);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
                    toast.type === 'error'
                        ? 'bg-red-100 border-red-400 text-red-700'
                        : 'bg-green-100 border-green-400 text-green-700'
                }`}>
                    {toast.message}
                </div>
            )}

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Tableau de bord Admin</h1>
                    <p className="mt-2 text-gray-600">Bienvenue, {user?.name}!</p>
                    <button onClick={logout} className="mt-2 text-sm text-red-600 hover:text-red-800">
                        Déconnexion
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <p className="font-semibold">⚠️ {error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-2 text-sm underline hover:no-underline"
                        >
                            Rafraîchir la page
                        </button>
                    </div>
                )}

                {/* Stats */}
                <StatsCards stats={stats} />

                {/* Tabs nav */}
                <div className="mb-6">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8 overflow-x-auto">
                            {[
                                { key: 'users', label: 'Utilisateurs' },
                                { key: 'enrollments', label: 'Inscriptions' },
                                {
                                    key: 'contacts',
                                    label: 'Contacts',
                                    badge: contactStats?.pending > 0 ? contactStats.pending : null,
                                },
                                {
                                    key: 'vae',
                                    label: 'Demandes VAE',
                                    badge: vaeStats?.pending > 0 ? vaeStats.pending : null,
                                },
                            ].map(({ key, label, badge }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                                        activeTab === key
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    {label}
                                    {badge && (
                                        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            {badge}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Tab content */}
                {activeTab === 'users' && (
                    <UsersTab
                        users={users}
                        onSearch={handleUserSearch}
                        onRoleChange={(id, role) => updateUserRole(id, role, currentPage, '', '')}
                        onDelete={(id) => deleteUser(id, currentPage, '', '')}
                        onViewApplications={fetchUserApplications}
                    />
                )}

                {activeTab === 'enrollments' && (
                    <EnrollmentsTab
                        enrollments={enrollments}
                        onSearch={handleEnrollmentSearch}
                        onStatusChange={(id, status) =>
                            updateApplicationStatus(id, status, currentPage, '', '')
                        }
                    />
                )}

                {activeTab === 'contacts' && (
                    <ContactsTab
                        contacts={contacts}
                        contactStats={contactStats}
                        onSearch={handleContactSearch}
                        onStatusChange={(id, action) =>
                            updateContactStatus(id, action, '', '')
                        }
                        onDelete={(id) => deleteContact(id, '', '')}
                    />
                )}

                {activeTab === 'vae' && (
                    <VAETab
                        vaeRequests={vaeRequests}
                        vaeStats={vaeStats}
                        onSearch={handleVAESearch}
                        onStatusChange={(id, status) =>
                            updateVAEStatus(id, status, currentPage, '', '')
                        }
                        onDelete={(id) => deleteVAERequest(id, currentPage, '', '')}
                        onAddNotes={(id, notes) =>
                            addVAENotes(id, notes, currentPage, '', '')
                        }
                    />
                )}
            </div>

            {/* Modal */}
            <UserApplicationsModal
                show={showAppModal}
                user={selectedUser}
                applications={userApplications}
                onClose={closeModal}
                onStatusChange={(id, status) =>
                    updateApplicationStatus(id, status, currentPage, '', '')
                }
            />
        </div>
    );
}