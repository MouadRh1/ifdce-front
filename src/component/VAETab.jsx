// src/pages/VAETab.jsx
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

/* ── Label helpers ── */
const VAE_STATUS_COLORS = {
    pending:   'bg-yellow-100 text-yellow-800',
    reviewing: 'bg-blue-100 text-blue-800',
    contacted: 'bg-purple-100 text-purple-800',
    documents: 'bg-indigo-100 text-indigo-800',
    approved:  'bg-green-100 text-green-800',
    rejected:  'bg-red-100 text-red-800',
};

const VAE_STATUS_LABELS = {
    pending:   'En attente',
    reviewing: "En cours d'étude",
    contacted: 'Contacté',
    documents: 'Documents reçus',
    approved:  'Approuvé',
    rejected:  'Rejeté',
};

const EXPERIENCE_LABELS = {
    lt3:   'Moins de 3 ans',
    '3-5': '3 à 5 ans',
    '5-10':'5 à 10 ans',
    gt10:  'Plus de 10 ans',
};

const DOMAIN_LABELS = {
    commerce:    'Commerce & Vente',
    informatique:'Informatique & Digital',
    sante:       'Santé & Social',
    btp:         'BTP & Industrie',
    management:  'Management & RH',
    finance:     'Finance & Comptabilité',
    autre:       'Autre',
};

const DIPLOMA_LABELS = {
    bts:    'BTS (Bac +2)',
    licence:'Licence Pro (Bac +3)',
    master: 'Master (Bac +5)',
    titre:  'Titre professionnel',
};

const getVAEStatusColor = (s) => VAE_STATUS_COLORS[s] || 'bg-gray-100 text-gray-800';
const getVAEStatusLabel = (s) => VAE_STATUS_LABELS[s] || s;
const getExperienceLabel = (v) => EXPERIENCE_LABELS[v] || v;
const getDomainLabel     = (v) => DOMAIN_LABELS[v]     || v;
const getDiplomaLabel    = (v) => DIPLOMA_LABELS[v]    || v;

const fmtDate = (val) => val ? new Date(val).toLocaleDateString('fr-FR') : '—';
const fmtDateTime = (val) => val ? new Date(val).toLocaleString('fr-FR') : '—';

/* ── Sub-components ── */
const DetailRow = ({ label, value, fullWidth = false }) => (
    <div className={fullWidth ? 'col-span-2' : ''}>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-sm text-gray-800">{value || '—'}</p>
    </div>
);

const SectionTitle = ({ children }) => (
    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest col-span-2 mt-2 mb-1 border-b border-gray-100 pb-1">
        {children}
    </p>
);

/* ── Main component ── */
export default function VAETab({
    vaeRequests = [],
    vaeStats = null,
    onSearch,
    onStatusChange,
    onDelete,
    onAddNotes,
}) {
    const [searchTerm, setSearchTerm]           = useState('');
    const [statusFilter, setStatusFilter]       = useState('');
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [notes, setNotes]                     = useState('');
    const [showNotesModal, setShowNotesModal]   = useState(false);

    /* ── Handlers ── */
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm, statusFilter);
    };

    const handleStatusChange = (id, status) => {
        if (window.confirm('Changer le statut de cette demande VAE ?')) {
            onStatusChange(id, status);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette demande VAE ?')) {
            onDelete(id);
        }
    };

    const handleAddNotes = (id) => {
        if (notes.trim()) {
            onAddNotes(id, notes);
            setNotes('');
            setShowNotesModal(false);
        }
    };

    const openDetail = (request) => {
        setSelectedRequest(request);
        setShowDetailModal(true);
    };

    const openNotesModal = (request) => {
        setSelectedRequest(request);
        setNotes(request.admin_notes || '');
        setShowNotesModal(true);
    };

    /* ── Excel export ── */
    const exportToExcel = () => {
        if (!vaeRequests.length) { alert('Aucune demande VAE à exporter.'); return; }

        const rows = vaeRequests.map((r) => ({
            ID:                  r.id,
            'Nom complet':       r.full_name,
            Email:               r.email,
            Téléphone:           r.phone,
            Ville:               r.city || '',
            'Années expérience': getExperienceLabel(r.experience_years),
            Domaine:             getDomainLabel(r.domain),
            'Parcours':          r.experience,
            'Diplôme visé':      getDiplomaLabel(r.target_diploma),
            'Spécialité':        r.field,
            Message:             r.message || '',
            Statut:              getVAEStatusLabel(r.status),
            'Contacté le':       fmtDate(r.contacted_at),
            'Documents reçus le':fmtDate(r.documents_received_at),
            'Approuvé le':       fmtDate(r.approved_at),
            'Rejeté le':         fmtDate(r.rejected_at),
            'Notes admin':       r.admin_notes || '',
            'Adresse IP':        r.ip_address || '',
            'Créé le':           fmtDate(r.created_at),
        }));

        const ws = XLSX.utils.json_to_sheet(rows);
        ws['!cols'] = rows[0] ? Object.keys(rows[0]).map(() => ({ wch: 22 })) : [];

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Demandes_VAE');
        XLSX.writeFile(wb, `demandes_vae_${new Date().toISOString().slice(0, 10)}.xlsx`);
    };

    /* ══════════════════════════════════════════════════════════ */
    return (
        <div className="bg-white rounded-lg shadow">

            {/* ── Header + Stats ── */}
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-start flex-wrap gap-3">
                    <h2 className="text-xl font-semibold text-gray-900">Demandes VAE</h2>
                    {vaeStats && (
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                            <span className="text-gray-600">Total : <strong>{vaeStats.total || 0}</strong></span>
                            <span className="text-yellow-600">En attente : <strong>{vaeStats.pending || 0}</strong></span>
                            <span className="text-blue-600">En étude : <strong>{vaeStats.reviewing || 0}</strong></span>
                            <span className="text-purple-600">Contactés : <strong>{vaeStats.contacted || 0}</strong></span>
                            <span className="text-indigo-600">Documents : <strong>{vaeStats.documents || 0}</strong></span>
                            <span className="text-green-600">Approuvés : <strong>{vaeStats.approved || 0}</strong></span>
                            <span className="text-red-600">Rejetés : <strong>{vaeStats.rejected || 0}</strong></span>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6">

                {/* ── Search & Filter ── */}
                <form onSubmit={handleSearch} className="mb-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Rechercher par nom, email, téléphone, ville…"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Tous les statuts</option>
                            <option value="pending">En attente</option>
                            <option value="reviewing">En cours d'étude</option>
                            <option value="contacted">Contacté</option>
                            <option value="documents">Documents reçus</option>
                            <option value="approved">Approuvé</option>
                            <option value="rejected">Rejeté</option>
                        </select>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                            Rechercher
                        </button>
                        <button type="button" onClick={exportToExcel} className="px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                            📊 Exporter
                        </button>
                    </div>
                </form>

                {/* ── Table ── */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                {[
                                    'Candidat', 'Ville', 'Expérience',
                                    'Domaine', 'Diplôme visé', 'Spécialité',
                                    'Statut', 'Suivi dates', 'Notes', 'Date demande', 'Actions',
                                ].map((h) => (
                                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {vaeRequests.length === 0 ? (
                                <tr>
                                    <td colSpan="11" className="px-6 py-8 text-center text-gray-400">
                                        Aucune demande VAE trouvée
                                    </td>
                                </tr>
                            ) : (
                                vaeRequests.map((r) => (
                                    <tr key={r.id} className="hover:bg-gray-50 transition-colors">

                                        {/* Candidat */}
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{r.full_name}</div>
                                            <div className="text-gray-500 text-xs">{r.email}</div>
                                            <div className="text-gray-400 text-xs">{r.phone}</div>
                                        </td>

                                        {/* Ville */}
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                                            {r.city || <span className="text-gray-300">—</span>}
                                        </td>

                                        {/* Expérience */}
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                                            {getExperienceLabel(r.experience_years)}
                                        </td>

                                        {/* Domaine */}
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                                            {getDomainLabel(r.domain)}
                                        </td>

                                        {/* Diplôme visé */}
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                                            {getDiplomaLabel(r.target_diploma)}
                                        </td>

                                        {/* Spécialité */}
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                                            {r.field}
                                        </td>

                                        {/* Statut */}
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getVAEStatusColor(r.status)}`}>
                                                {getVAEStatusLabel(r.status)}
                                            </span>
                                        </td>

                                        {/* Suivi dates */}
                                        <td className="px-4 py-3 text-xs text-gray-500 space-y-0.5 min-w-[140px]">
                                            {r.contacted_at && (
                                                <div>📞 Contacté : {fmtDate(r.contacted_at)}</div>
                                            )}
                                            {r.documents_received_at && (
                                                <div>📄 Docs : {fmtDate(r.documents_received_at)}</div>
                                            )}
                                            {r.approved_at && (
                                                <div className="text-green-600">✅ Approuvé : {fmtDate(r.approved_at)}</div>
                                            )}
                                            {r.rejected_at && (
                                                <div className="text-red-600">❌ Rejeté : {fmtDate(r.rejected_at)}</div>
                                            )}
                                            {!r.contacted_at && !r.documents_received_at && !r.approved_at && !r.rejected_at && (
                                                <span className="text-gray-300">—</span>
                                            )}
                                        </td>

                                        {/* Notes (aperçu) */}
                                        <td className="px-4 py-3 max-w-[160px]">
                                            {r.admin_notes ? (
                                                <p className="text-xs text-gray-600 truncate" title={r.admin_notes}>
                                                    {r.admin_notes}
                                                </p>
                                            ) : (
                                                <span className="text-gray-300 text-xs">—</span>
                                            )}
                                        </td>

                                        {/* Date demande */}
                                        <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                                            <div>{fmtDate(r.created_at)}</div>
                                            <div className="text-gray-400">
                                                {r.created_at ? new Date(r.created_at).toLocaleTimeString('fr-FR') : ''}
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <div className="flex flex-col gap-1.5">
                                                <button
                                                    onClick={() => openDetail(r)}
                                                    className="text-blue-600 hover:text-blue-900 text-xs font-medium"
                                                >
                                                    Voir détails
                                                </button>
                                                <select
                                                    value={r.status}
                                                    onChange={(e) => handleStatusChange(r.id, e.target.value)}
                                                    className="text-xs border border-gray-300 rounded px-1.5 py-1"
                                                >
                                                    <option value="pending">En attente</option>
                                                    <option value="reviewing">En étude</option>
                                                    <option value="contacted">Contacté</option>
                                                    <option value="documents">Documents reçus</option>
                                                    <option value="approved">Approuvé</option>
                                                    <option value="rejected">Rejeté</option>
                                                </select>
                                                <button
                                                    onClick={() => openNotesModal(r)}
                                                    className="text-purple-600 hover:text-purple-900 text-xs font-medium"
                                                >
                                                    ✏️ Notes
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(r.id)}
                                                    className="text-red-600 hover:text-red-900 text-xs font-medium"
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ══════════════════════════════════════
                Detail Modal — tous les champs
            ══════════════════════════════════════ */}
            {showDetailModal && selectedRequest && (
                <div className="fixed inset-0 bg-black/40 overflow-y-auto z-50 flex items-start justify-center py-10 px-4">
                    <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl">

                        {/* Modal header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Détails de la demande VAE</h3>
                                <p className="text-xs text-gray-400 mt-0.5">ID #{selectedRequest.id} · Créé le {fmtDateTime(selectedRequest.created_at)}</p>
                            </div>
                            <button onClick={() => setShowDetailModal(false)} className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

                            {/* Statut */}
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getVAEStatusColor(selectedRequest.status)}`}>
                                    {getVAEStatusLabel(selectedRequest.status)}
                                </span>
                                {selectedRequest.ip_address && (
                                    <span className="text-xs text-gray-400">IP : {selectedRequest.ip_address}</span>
                                )}
                            </div>

                            {/* Informations personnelles */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                <SectionTitle>Informations personnelles</SectionTitle>
                                <DetailRow label="Nom complet"       value={selectedRequest.full_name} />
                                <DetailRow label="Email"             value={selectedRequest.email} />
                                <DetailRow label="Téléphone"         value={selectedRequest.phone} />
                                <DetailRow label="Ville de résidence" value={selectedRequest.city} />
                            </div>

                            {/* Expérience */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                <SectionTitle>Expérience professionnelle</SectionTitle>
                                <DetailRow label="Années d'expérience" value={getExperienceLabel(selectedRequest.experience_years)} />
                                <DetailRow label="Domaine d'activité"  value={getDomainLabel(selectedRequest.domain)} />
                                <div className="col-span-2">
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Description du parcours</p>
                                    <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 whitespace-pre-wrap leading-relaxed">
                                        {selectedRequest.experience}
                                    </p>
                                </div>
                            </div>

                            {/* Diplôme visé */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                <SectionTitle>Diplôme visé</SectionTitle>
                                <DetailRow label="Diplôme souhaité" value={getDiplomaLabel(selectedRequest.target_diploma)} />
                                <DetailRow label="Spécialité / Filière" value={selectedRequest.field} />
                                {selectedRequest.message && (
                                    <div className="col-span-2">
                                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Message complémentaire</p>
                                        <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                                            {selectedRequest.message}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Suivi & timestamps */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                <SectionTitle>Suivi du dossier</SectionTitle>
                                <DetailRow label="Contacté le"         value={fmtDateTime(selectedRequest.contacted_at)} />
                                <DetailRow label="Documents reçus le"  value={fmtDateTime(selectedRequest.documents_received_at)} />
                                <DetailRow label="Approuvé le"         value={fmtDateTime(selectedRequest.approved_at)} />
                                <DetailRow label="Rejeté le"           value={fmtDateTime(selectedRequest.rejected_at)} />
                            </div>

                            {/* Notes admin */}
                            {selectedRequest.admin_notes && (
                                <div>
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Notes administrateur</p>
                                    <p className="text-sm text-gray-700 bg-purple-50 border border-purple-100 rounded-lg p-3 whitespace-pre-wrap">
                                        {selectedRequest.admin_notes}
                                    </p>
                                </div>
                            )}

                            {/* Traçabilité */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                <SectionTitle>Traçabilité</SectionTitle>
                                <DetailRow label="Adresse IP"   value={selectedRequest.ip_address} />
                                <DetailRow label="Mis à jour le" value={fmtDateTime(selectedRequest.updated_at)} />
                            </div>
                        </div>

                        {/* Modal footer */}
                        <div className="px-6 py-4 border-t border-gray-100 flex justify-between gap-3">
                            <button
                                onClick={() => { setShowDetailModal(false); openNotesModal(selectedRequest); }}
                                className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700"
                            >
                                ✏️ Modifier les notes
                            </button>
                            <button
                                onClick={() => setShowDetailModal(false)}
                                className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ══════════════════════════════════════
                Notes Modal
            ══════════════════════════════════════ */}
            {showNotesModal && selectedRequest && (
                <div className="fixed inset-0 bg-black/40 overflow-y-auto z-50 flex items-start justify-center py-10 px-4">
                    <div className="bg-white w-full max-w-lg rounded-xl shadow-xl">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Notes — {selectedRequest.full_name}
                            </h3>
                            <button onClick={() => setShowNotesModal(false)} className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="px-6 py-5 space-y-4">
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                rows={6}
                                placeholder="Ajouter des notes sur cette demande VAE…"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setShowNotesModal(false)}
                                    className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50"
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={() => handleAddNotes(selectedRequest.id)}
                                    className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700"
                                >
                                    Sauvegarder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}