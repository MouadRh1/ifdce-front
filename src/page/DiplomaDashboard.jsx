import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DiplomaDashboard() {
  const [diplomas, setDiplomas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDiploma, setEditingDiploma] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration_years: 3,
    level: 'bachelor',
    is_active: true
  });

  // Fetch diplomas on component mount
  useEffect(() => {
    fetchDiplomas();
  }, []);

  const fetchDiplomas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/diplomas');
      setDiplomas(response.data);
    } catch (error) {
      console.error('Error fetching diplomas:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      duration_years: 3,
      level: 'bachelor',
      is_active: true
    });
    setEditingDiploma(null);
    setShowForm(false);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      if (editingDiploma) {
        // Update existing diploma
        await axios.put(`http://localhost:8000/api/diplomas/${editingDiploma.id}`, formData);
        alert('Diploma updated successfully!');
      } else {
        // Create new diploma
        await axios.post('http://localhost:8000/api/diplomas', formData);
        alert('Diploma created successfully!');
      }
      
      fetchDiplomas(); // Refresh the list
      resetForm();
    } catch (error) {
      console.error('Error saving diploma:', error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('Error saving diploma. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (diploma) => {
    setFormData({
      name: diploma.name,
      description: diploma.description || '',
      duration_years: diploma.duration_years,
      level: diploma.level,
      is_active: diploma.is_active
    });
    setEditingDiploma(diploma);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this diploma? This will also delete all associated fields.')) {
      try {
        await axios.delete(`http://localhost:8000/api/diplomas/${id}`);
        alert('Diploma deleted successfully!');
        fetchDiplomas(); // Refresh the list
      } catch (error) {
        console.error('Error deleting diploma:', error);
        alert('Error deleting diploma. Please try again.');
      }
    }
  };

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'bachelor': return 'bg-blue-100 text-blue-800';
      case 'master': return 'bg-green-100 text-green-800';
      case 'doctorate': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Diploma Management Dashboard</h1>
          <p className="mt-2 text-gray-600">Create and manage academic diploma programs</p>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex justify-between items-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            + Add New Diploma
          </button>
          
          <button
            onClick={fetchDiplomas}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            🔄 Refresh
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-bold mb-4">
                {editingDiploma ? 'Edit Diploma' : 'Create New Diploma'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Diploma Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Diploma Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Computer Science"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of the diploma program..."
                  />
                  {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description[0]}</p>}
                </div>

                {/* Duration Years */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (Years) *
                  </label>
                  <select
                    name="duration_years"
                    value={formData.duration_years}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value={1}>1 Year</option>
                    <option value={2}>2 Years</option>
                    <option value={3}>3 Years</option>
                    <option value={4}>4 Years</option>
                    <option value={5}>5 Years</option>
                    <option value={6}>6 Years</option>
                  </select>
                  {errors.duration_years && <p className="text-red-500 text-xs mt-1">{errors.duration_years[0]}</p>}
                </div>

                {/* Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level *
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="doctorate">Doctorate</option>
                  </select>
                  {errors.level && <p className="text-red-500 text-xs mt-1">{errors.level[0]}</p>}
                </div>

                {/* Is Active */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Active Program
                  </label>
                </div>

                {/* Form Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : (editingDiploma ? 'Update' : 'Create')}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Diplomas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diplomas.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 text-lg">No diplomas found.</div>
              <p className="text-gray-400 mt-2">Create your first diploma program to get started!</p>
            </div>
          ) : (
            diplomas.map((diploma) => (
              <div key={diploma.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {diploma.name}
                    </h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelBadgeColor(diploma.level)}`}>
                      {diploma.level.charAt(0).toUpperCase() + diploma.level.slice(1)}
                    </span>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    diploma.is_active 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {diploma.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Duration:</span> {diploma.duration_years} year{diploma.duration_years > 1 ? 's' : ''}
                  </p>
                  {diploma.description && (
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {diploma.description}
                    </p>
                  )}
                </div>

                {/* Card Actions */}
                <div className="flex space-x-2 pt-4 border-t">
                  <button
                    onClick={() => handleEdit(diploma)}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(diploma.id)}
                    className="flex-1 bg-red-600 text-white py-2 px-3 rounded-md text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>

                {/* Card Footer */}
                <div className="mt-3 text-xs text-gray-500 text-center">
                  Created: {new Date(diploma.created_at).toLocaleDateString()}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats Summary */}
        {diplomas.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{diplomas.length}</div>
                <div className="text-sm text-gray-500">Total Diplomas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {diplomas.filter(d => d.is_active).length}
                </div>
                <div className="text-sm text-gray-500">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {diplomas.filter(d => d.level === 'bachelor').length}
                </div>
                <div className="text-sm text-gray-500">Bachelor Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {diplomas.filter(d => d.level === 'master').length}
                </div>
                <div className="text-sm text-gray-500">Master Programs</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}