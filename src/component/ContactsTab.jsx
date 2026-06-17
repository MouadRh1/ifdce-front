// src/components/admin/ContactsTab.jsx
import React, { useState } from 'react';
import { getStatusColor, getStatusLabel, getTypeLabel } from './AdminHelpers';

export default function ContactsTab({ contacts, contactStats, onSearch, onStatusChange, onDelete }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [contactFilter, setContactFilter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm, contactFilter);
    };

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center flex-wrap gap-2">
                    <h2 className="text-xl font-semibold text-gray-900">Messages de contact</h2>
                    {contactStats && (
                        <div className="flex flex-wrap gap-3 text-sm">
                            <span className="text-gray-600">Total: <strong>{contactStats.total || 0}</strong></span>
                            <span className="text-yellow-600">En attente: <strong>{contactStats.pending || 0}</strong></span>
                            <span className="text-blue-600">Lus: <strong>{contactStats.read || 0}</strong></span>
                            <span className="text-purple-600">Répondus: <strong>{contactStats.replied || 0}</strong></span>
                            <span className="text-gray-600">Archivés: <strong>{contactStats.archived || 0}</strong></span>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6">
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Rechercher par nom, email ou sujet..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={contactFilter}
                            onChange={(e) => setContactFilter(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Tous les statuts</option>
                            <option value="pending">En attente</option>
                            <option value="read">Lu</option>
                            <option value="replied">Répondu</option>
                            <option value="archived">Archivé</option>
                        </select>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Rechercher
                        </button>
                    </div>
                </form>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {['Contact', 'Type', 'Sujet', 'Statut', 'Date', 'Actions'].map((h) => (
                                    <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contacts.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                        Aucun message trouvé
                                    </td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                                            <div className="text-sm text-gray-500">{contact.email}</div>
                                            {contact.phone && <div className="text-xs text-gray-400">{contact.phone}</div>}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                                {getTypeLabel(contact.type)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                                            <div className="font-medium truncate">{contact.subject}</div>
                                            <div className="text-gray-500 text-xs truncate">{contact.message}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                                                {getStatusLabel(contact.status)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(contact.created_at).toLocaleDateString('fr-FR')}
                                            <div className="text-xs text-gray-400">
                                                {new Date(contact.created_at).toLocaleTimeString('fr-FR')}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex flex-col gap-1">
                                                {contact.status !== 'replied' && contact.status !== 'archived' && (
                                                    <button
                                                        onClick={() => onStatusChange(contact.id, 'reply')}
                                                        className="text-purple-600 hover:text-purple-900 text-xs text-left"
                                                    >
                                                        Marquer comme répondu
                                                    </button>
                                                )}
                                                {contact.status !== 'archived' && (
                                                    <button
                                                        onClick={() => onStatusChange(contact.id, 'archive')}
                                                        className="text-gray-600 hover:text-gray-900 text-xs text-left"
                                                    >
                                                        Archiver
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => onDelete(contact.id)}
                                                    className="text-red-600 hover:text-red-900 text-xs text-left"
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
        </div>
    );
}