// src/utils/adminHelpers.js

// ─── Status Helpers ──────────────────────────────────────────────────────────

export const getStatusColor = (status) => {
    const colors = {
        // Statuts généraux
        approved: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800',
        pending: 'bg-yellow-100 text-yellow-800',
        read: 'bg-blue-100 text-blue-800',
        replied: 'bg-purple-100 text-purple-800',
        archived: 'bg-gray-100 text-gray-800',
        // Statuts VAE
        reviewing: 'bg-indigo-100 text-indigo-800',
        contacted: 'bg-pink-100 text-pink-800',
        documents: 'bg-cyan-100 text-cyan-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
};

export const getStatusLabel = (status) => {
    const labels = {
        // Statuts généraux
        pending: 'En attente',
        read: 'Lu',
        replied: 'Répondu',
        archived: 'Archivé',
        approved: 'Approuvé',
        rejected: 'Rejeté',
        // Statuts VAE
        reviewing: 'En cours d\'étude',
        contacted: 'Contacté',
        documents: 'Documents reçus',
    };
    return labels[status] || status;
};

// ─── Type Helpers ────────────────────────────────────────────────────────────

export const getTypeLabel = (type) => {
    const labels = {
        general: 'Générale',
        vae: 'VAE',
        formation: 'Formation',
        conseil: 'Conseil',
        support: 'Support',
    };
    return labels[type] || type;
};

// ─── VAE Specific Helpers ──────────────────────────────────────────────────

export const getVAEStatusColor = (status) => {
    const colors = {
        pending: 'bg-yellow-100 text-yellow-800',
        reviewing: 'bg-indigo-100 text-indigo-800',
        contacted: 'bg-pink-100 text-pink-800',
        documents: 'bg-cyan-100 text-cyan-800',
        approved: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
};

export const getVAEStatusLabel = (status) => {
    const labels = {
        pending: 'En attente',
        reviewing: 'En cours d\'étude',
        contacted: 'Contacté',
        documents: 'Documents reçus',
        approved: 'Approuvé',
        rejected: 'Rejeté',
    };
    return labels[status] || status;
};

export const getExperienceLabel = (value) => {
    const labels = {
        lt3: 'Moins de 3 ans',
        '3-5': '3 à 5 ans',
        '5-10': '5 à 10 ans',
        gt10: 'Plus de 10 ans',
    };
    return labels[value] || value;
};

export const getDomainLabel = (value) => {
    const labels = {
        commerce: 'Commerce & Vente',
        informatique: 'Informatique & Digital',
        sante: 'Santé & Social',
        btp: 'BTP & Industrie',
        management: 'Management & RH',
        finance: 'Finance & Comptabilité',
        autre: 'Autre',
    };
    return labels[value] || value;
};

export const getDiplomaLabel = (value) => {
    const labels = {
        bts: 'BTS (Bac +2)',
        licence: 'Licence Pro (Bac +3)',
        master: 'Master (Bac +5)',
        titre: 'Titre professionnel',
    };
    return labels[value] || value;
};

// ─── Export Helpers ──────────────────────────────────────────────────────────

export const exportEnrollmentsToExcel = (enrollments) => {
    if (!enrollments || enrollments.length === 0) {
        alert('Aucune candidature à exporter.');
        return;
    }

    const rows = enrollments.map((e) => ({
        ID: e.id,
        Étudiant: e.user?.name || '',
        Email: e.user?.email || '',
        Diplôme: e.diploma?.name || e.diploma_name || '',
        Filière: e.field?.name || e.field_name || '',
        Statut: getStatusLabel(e.status),
        'Date de candidature': e.created_at
            ? new Date(e.created_at).toLocaleDateString('fr-FR')
            : '',
    }));

    import('xlsx').then((XLSX) => {
        const ws = XLSX.utils.json_to_sheet(rows);
        ws['!cols'] = [
            { wch: 6 }, { wch: 25 }, { wch: 30 },
            { wch: 25 }, { wch: 25 }, { wch: 12 }, { wch: 20 }
        ];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Candidatures');
        const filename = `candidatures_${new Date().toISOString().slice(0, 10)}.xlsx`;
        XLSX.writeFile(wb, filename);
    });
};

export const exportVAERequestsToExcel = (vaeRequests) => {
    if (!vaeRequests || vaeRequests.length === 0) {
        alert('Aucune demande VAE à exporter.');
        return;
    }

    const rows = vaeRequests.map((r) => ({
        ID: r.id,
        'Nom complet': r.full_name || '',
        Email: r.email || '',
        Téléphone: r.phone || '',
        Ville: r.city || '',
        Expérience: getExperienceLabel(r.experience_years) || r.experience_years || '',
        Domaine: getDomainLabel(r.domain) || r.domain || '',
        'Diplôme visé': getDiplomaLabel(r.target_diploma) || r.target_diploma || '',
        Spécialité: r.field || '',
        Statut: getVAEStatusLabel(r.status),
        'Date de création': r.created_at 
            ? new Date(r.created_at).toLocaleDateString('fr-FR') 
            : '',
        'Notes admin': r.admin_notes || '',
    }));

    import('xlsx').then((XLSX) => {
        const ws = XLSX.utils.json_to_sheet(rows);
        ws['!cols'] = [
            { wch: 6 }, { wch: 25 }, { wch: 30 }, { wch: 15 },
            { wch: 20 }, { wch: 20 }, { wch: 25 }, { wch: 20 },
            { wch: 15 }, { wch: 15 }, { wch: 35 }
        ];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Demandes_VAE');
        const filename = `demandes_vae_${new Date().toISOString().slice(0, 10)}.xlsx`;
        XLSX.writeFile(wb, filename);
    });
};