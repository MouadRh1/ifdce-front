// src/hooks/useAdminData.js
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../config/api';

export const useAdminData = () => {
    const { user, isAdmin, loading: authLoading, logout } = useAuth();
    
    // ─── États ──────────────────────────────────────────────────────────────
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [toast, setToast] = useState(null);
    
    // Données du dashboard
    const [stats, setStats] = useState(null);
    
    // Utilisateurs
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userApplications, setUserApplications] = useState([]);
    const [showAppModal, setShowAppModal] = useState(false);
    
    // Inscriptions
    const [enrollments, setEnrollments] = useState([]);
    const [enrollmentStats, setEnrollmentStats] = useState(null);
    
    // Contacts
    const [contacts, setContacts] = useState([]);
    const [contactStats, setContactStats] = useState(null);
    
    // VAE
    const [vaeRequests, setVAERequests] = useState([]);
    const [vaeStats, setVAEStats] = useState(null);
    
    // ─── Toast Helper ───────────────────────────────────────────────────────
    const showToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    // ─── Fetch Dashboard ──────────────────────────────────────────────────
    const fetchDashboardData = async () => {
        try {
            const response = await api.get('/admin/dashboard');
            setStats(response.data);
            return response.data;
        } catch (error) {
            console.error('[Admin] Error fetching dashboard:', error);
            if (error.response?.status === 401) logout();
            return null;
        }
    };

    // ─── Fetch Users ──────────────────────────────────────────────────────
    const fetchUsers = async (page = 1, search = '', role = '') => {
        try {
            const params = new URLSearchParams({
                page: page,
                per_page: 10,
                ...(search && { search }),
                ...(role && { role })
            });
            
            const response = await api.get(`/admin/users?${params}`);
            setUsers(response.data.data || []);
            return response.data;
        } catch (error) {
            console.error('[Admin] Error fetching users:', error);
            if (error.response?.status === 401) logout();
            setUsers([]);
            return null;
        }
    };

    const fetchUserApplications = async (userId) => {
        try {
            const response = await api.get(`/admin/users/${userId}/applications`);
            setUserApplications(response.data.applications || []);
            setSelectedUser(response.data.user);
            setShowAppModal(true);
        } catch (error) {
            console.error('[Admin] Error fetching user applications:', error);
            showToast('Erreur lors du chargement des candidatures', 'error');
        }
    };

    const updateUserRole = async (userId, newRole, page = 1, search = '', role = '') => {
        try {
            await api.put(`/admin/users/${userId}/role`, { role: newRole });
            await fetchUsers(page, search, role);
            showToast('Rôle utilisateur mis à jour', 'success');
        } catch (error) {
            console.error('[Admin] Error updating user role:', error);
            showToast('Erreur lors de la mise à jour du rôle', 'error');
        }
    };

    const deleteUser = async (userId, page = 1, search = '', role = '') => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) return;
        
        try {
            await api.delete(`/admin/users/${userId}`);
            await fetchUsers(page, search, role);
            showToast('Utilisateur supprimé', 'success');
        } catch (error) {
            console.error('[Admin] Error deleting user:', error);
            showToast(error.response?.data?.message || 'Erreur lors de la suppression', 'error');
        }
    };

    // ─── Fetch Enrollments ──────────────────────────────────────────────────
    const fetchEnrollments = async (page = 1, search = '', status = '') => {
        try {
            const params = new URLSearchParams({
                page: page,
                per_page: 10,
                ...(search && { search }),
                ...(status && { status })
            });
            
            const response = await api.get(`/admin/enrollments?${params}`);
            const data = response.data.enrollments?.data || response.data.data || [];
            setEnrollments(data);
            return data;
        } catch (error) {
            console.error('[Admin] Error fetching enrollments:', error);
            if (error.response?.status === 401) logout();
            setEnrollments([]);
            return null;
        }
    };

    const fetchEnrollmentStats = async () => {
        try {
            const response = await api.get('/admin/enrollments/stats');
            setEnrollmentStats(response.data);
            return response.data;
        } catch (error) {
            console.error('[Admin] Error fetching enrollment stats:', error);
            if (error.response?.status === 401) logout();
            setEnrollmentStats(null);
            return null;
        }
    };

    const updateApplicationStatus = async (applicationId, newStatus, page = 1, search = '', status = '') => {
        try {
            await api.put(`/admin/applications/${applicationId}/status`, { status: newStatus });
            await Promise.all([
                fetchEnrollments(page, search, status),
                selectedUser && fetchUserApplications(selectedUser.id)
            ]);
            showToast('Statut mis à jour', 'success');
        } catch (error) {
            console.error('[Admin] Error updating application status:', error);
            showToast('Erreur lors de la mise à jour', 'error');
        }
    };

    // ─── Fetch Contacts ──────────────────────────────────────────────────────
    const fetchContacts = async (page = 1, search = '', status = '') => {
        try {
            const params = new URLSearchParams({
                page: page,
                per_page: 20,
                ...(search && { search }),
                ...(status && { status })
            });
            
            const response = await api.get(`/admin/contacts?${params}`);
            const data = response.data.data?.data || response.data.data || [];
            setContacts(data);
            return data;
        } catch (error) {
            console.error('[Admin] Error fetching contacts:', error);
            if (error.response?.status === 401) logout();
            setContacts([]);
            return null;
        }
    };

    const fetchContactStats = async () => {
        try {
            const response = await api.get('/admin/contacts/stats');
            setContactStats(response.data.data);
            return response.data;
        } catch (error) {
            console.error('[Admin] Error fetching contact stats:', error);
            if (error.response?.status === 401) logout();
            setContactStats(null);
            return null;
        }
    };

    const updateContactStatus = async (contactId, action, search = '', status = '') => {
        try {
            if (action === 'reply') {
                await api.put(`/admin/contacts/${contactId}/reply`);
                showToast('Contact marqué comme répondu', 'success');
            } else if (action === 'archive') {
                await api.put(`/admin/contacts/${contactId}/archive`);
                showToast('Contact archivé', 'success');
            }
            await Promise.all([
                fetchContacts(1, search, status),
                fetchContactStats()
            ]);
        } catch (error) {
            console.error('[Admin] Error updating contact:', error);
            showToast('Erreur lors de la mise à jour', 'error');
        }
    };

    const deleteContact = async (contactId, search = '', status = '') => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) return;
        
        try {
            await api.delete(`/admin/contacts/${contactId}`);
            await Promise.all([
                fetchContacts(1, search, status),
                fetchContactStats()
            ]);
            showToast('Contact supprimé', 'success');
        } catch (error) {
            console.error('[Admin] Error deleting contact:', error);
            showToast('Erreur lors de la suppression', 'error');
        }
    };

    // ─── Fetch VAE Requests ──────────────────────────────────────────────────
    const fetchVAERequests = async (page = 1, search = '', status = '') => {
        try {
            const params = new URLSearchParams({
                page: page,
                per_page: 20,
                ...(search && { search }),
                ...(status && { status })
            });
            
            const response = await api.get(`/admin/vae-requests?${params}`);
            const data = response.data.data?.data || response.data.data || [];
            setVAERequests(data);
            return data;
        } catch (error) {
            console.error('[Admin] Error fetching VAE requests:', error);
            if (error.response?.status === 401) logout();
            setVAERequests([]);
            return null;
        }
    };

    const fetchVAEStats = async () => {
        try {
            const response = await api.get('/admin/vae-requests/stats');
            setVAEStats(response.data.data);
            return response.data;
        } catch (error) {
            console.error('[Admin] Error fetching VAE stats:', error);
            if (error.response?.status === 401) logout();
            setVAEStats(null);
            return null;
        }
    };

    const updateVAEStatus = async (id, status, page = 1, search = '', statusFilter = '') => {
        try {
            await api.put(`/admin/vae-requests/${id}/status`, { status });
            await Promise.all([
                fetchVAERequests(page, search, statusFilter),
                fetchVAEStats()
            ]);
            showToast('Statut VAE mis à jour', 'success');
        } catch (error) {
            console.error('[Admin] Error updating VAE status:', error);
            showToast('Erreur lors de la mise à jour', 'error');
        }
    };

    const addVAENotes = async (id, notes, page = 1, search = '', statusFilter = '') => {
        try {
            await api.put(`/admin/vae-requests/${id}/notes`, { admin_notes: notes });
            await Promise.all([
                fetchVAERequests(page, search, statusFilter),
                fetchVAEStats()
            ]);
            showToast('Notes ajoutées', 'success');
        } catch (error) {
            console.error('[Admin] Error adding VAE notes:', error);
            showToast('Erreur lors de l\'ajout des notes', 'error');
        }
    };

    const deleteVAERequest = async (id, page = 1, search = '', statusFilter = '') => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette demande VAE ?')) return;
        
        try {
            await api.delete(`/admin/vae-requests/${id}`);
            await Promise.all([
                fetchVAERequests(page, search, statusFilter),
                fetchVAEStats()
            ]);
            showToast('Demande VAE supprimée', 'success');
        } catch (error) {
            console.error('[Admin] Error deleting VAE request:', error);
            showToast('Erreur lors de la suppression', 'error');
        }
    };

    // ─── Load All Data ──────────────────────────────────────────────────────
    const loadAllData = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const token = localStorage.getItem('auth_token') || localStorage.getItem('token');
            if (!token) {
                logout();
                return;
            }
            
            await Promise.allSettled([
                fetchDashboardData(),
                fetchUsers(1, '', ''),
                fetchEnrollments(1, '', ''),
                fetchEnrollmentStats(),
                fetchContacts(1, '', ''),
                fetchContactStats(),
                fetchVAERequests(1, '', ''),
                fetchVAEStats()
            ]);
        } catch (error) {
            console.error('[Admin] Erreur:', error);
            if (error.response?.status === 401) {
                logout();
                return;
            }
            setError('Impossible de charger les données.');
        } finally {
            setLoading(false);
        }
    };

    // ─── Initial Load ──────────────────────────────────────────────────────
    useEffect(() => {
        if (authLoading) return;
        if (!user) {
            window.location.href = '/login';
            return;
        }
        if (!isAdmin()) {
            window.location.href = '/';
            return;
        }
        loadAllData();
    }, [user, isAdmin, authLoading]);

    // ─── Return ──────────────────────────────────────────────────────────────
    return {
        // États généraux
        loading,
        authLoading,
        error,
        toast,
        user,
        isAdmin,
        
        // Dashboard
        stats,
        
        // Utilisateurs
        users,
        selectedUser,
        userApplications,
        showAppModal,
        setShowAppModal,
        setSelectedUser,
        setUserApplications,
        fetchUsers,
        fetchUserApplications,
        updateUserRole,
        deleteUser,
        
        // Inscriptions
        enrollments,
        enrollmentStats,
        fetchEnrollments,
        fetchEnrollmentStats,
        updateApplicationStatus,
        
        // Contacts
        contacts,
        contactStats,
        fetchContacts,
        fetchContactStats,
        updateContactStatus,
        deleteContact,
        
        // VAE
        vaeRequests,
        vaeStats,
        fetchVAERequests,
        fetchVAEStats,
        updateVAEStatus,
        addVAENotes,
        deleteVAERequest,
        
        // Fonctions
        logout,
        loadAllData,
        showToast,
    };
};