// src/components/admin/EnrollmentsTab.jsx
import React, { useState } from "react";
import {
  getStatusColor,
  getStatusLabel,
  exportEnrollmentsToExcel,
} from "./AdminHelpers";

const INITIAL_FILTERS = {
  search: "",
  status: "",
  formation: "",
  dateFrom: "",
  dateTo: "",
};

export default function EnrollmentsTab({
  enrollments,
  onSearch,
  onStatusChange,
}) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const setField = (field) => (e) =>
    setFilters((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
    onSearch(INITIAL_FILTERS);
  };

  // Unique formations derived from loaded enrollments (client-side)
  const formations = [
    ...new Set(
      enrollments.map((e) => e.diploma?.name || e.diploma_name).filter(Boolean),
    ),
  ].sort();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Inscriptions
          <span className="ml-2 text-sm font-normal text-gray-500">
            ({enrollments.length} résultat{enrollments.length !== 1 ? "s" : ""})
          </span>
        </h2>
        <button
          onClick={() => exportEnrollmentsToExcel(enrollments)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Exporter Excel
        </button>
      </div>

      <div className="p-6">
        {/* ── Filters ── */}
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Name search */}
            <div className="xl:col-span-2">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Nom / Email
              </label>
              <input
                type="text"
                placeholder="Rechercher par nom..."
                value={filters.search}
                onChange={setField("search")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Formation */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Formation (diplôme)
              </label>
              <select
                value={filters.formation}
                onChange={setField("formation")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Toutes les formations</option>
                {formations.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Statut
              </label>
              <select
                value={filters.status}
                onChange={setField("status")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Tous les statuts</option>
                <option value="pending">En attente</option>
                <option value="approved">Approuvé</option>
                <option value="rejected">Rejeté</option>
              </select>
            </div>

            {/* Date range */}
            <div className="flex flex-col gap-1">
              <label className="block text-xs font-medium text-gray-500">
                Période
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={filters.dateFrom}
                  onChange={setField("dateFrom")}
                  title="Date de début"
                  className="flex-1 px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={filters.dateTo}
                  onChange={setField("dateTo")}
                  title="Date de fin"
                  className="flex-1 px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
            >
              Rechercher
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200"
            >
              Réinitialiser
            </button>
          </div>
        </form>

        {/* ── Table ── */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Étudiant",
                  "Diplôme",
                  "Filière",
                  "Statut",
                  "Date",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrollments.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    Aucune inscription trouvée
                  </td>
                </tr>
              ) : (
                enrollments.map((enrollment) => (
                  <tr key={enrollment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-medium">
                            {enrollment.user?.name?.charAt(0)?.toUpperCase() ||
                              "U"}
                          </span>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {enrollment.user?.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {enrollment.user?.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {enrollment.diploma?.name ||
                        enrollment.diploma_name ||
                        "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {enrollment.field?.name || enrollment.field_name || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(enrollment.status)}`}
                      >
                        {getStatusLabel(enrollment.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(enrollment.created_at).toLocaleDateString(
                        "fr-FR",
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <select
                        value={enrollment.status}
                        onChange={(e) =>
                          onStatusChange(enrollment.id, e.target.value)
                        }
                        className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="pending">En attente</option>
                        <option value="approved">Approuvé</option>
                        <option value="rejected">Rejeté</option>
                      </select>
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
