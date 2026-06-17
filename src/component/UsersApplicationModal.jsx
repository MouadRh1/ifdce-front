// src/components/admin/UserApplicationsModal.jsx
import React from 'react';
import { getStatusColor, getStatusLabel } from './adminHelpers';

export default function UserApplicationsModal({ show, user, applications, onClose, onStatusChange }) {
    if (!show || !user) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                        Candidatures de {user.name}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {applications.length === 0 ? (
                        <p className="text-center text-gray-500 py-4">Aucune candidature trouvée</p>
                    ) : (
                        applications.map((app) => (
                            <div key={app.id} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-medium text-gray-900">{app.diploma?.name || app.diploma_name}</h4>
                                        <p className="text-sm text-gray-600">{app.field?.name || app.field_name}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {new Date(app.created_at).toLocaleDateString('fr-FR')}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>
                                            {getStatusLabel(app.status)}
                                        </span>
                                        <select
                                            value={app.status}
                                            onChange={(e) => onStatusChange(app.id, e.target.value)}
                                            className="text-xs border border-gray-300 rounded px-2 py-1"
                                        >
                                            <option value="pending">En attente</option>
                                            <option value="approved">Approuvé</option>
                                            <option value="rejected">Rejeté</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}