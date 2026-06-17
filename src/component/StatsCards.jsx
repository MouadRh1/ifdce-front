// src/components/admin/StatsCards.jsx
import React from 'react';

const Card = ({ color, label, value }) => (
    <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
            <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-500">{label}</div>
                <div className="text-2xl font-bold text-gray-900">{value ?? 0}</div>
            </div>
        </div>
    </div>
);

export default function StatsCards({ stats }) {
    if (!stats) return null;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card color="bg-blue-500"   label="Total Utilisateurs"  value={stats.total_users} />
            <Card color="bg-green-500"  label="Étudiants"           value={stats.total_students} />
            <Card color="bg-purple-500" label="Total Candidatures"  value={stats.total_applications} />
            <Card color="bg-yellow-500" label="En attente"          value={stats.pending_applications} />
        </div>
    );
}