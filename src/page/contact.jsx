import React, { useState } from 'react';
import api from '../config/api';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'general'
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear field errors when user types
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setFieldErrors({});
        setSuccess(false);

        try {
            const response = await api.post('/contact', formData);
            
            if (response.data.success) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    type: 'general'
                });
                
                // Scroll to top to see success message
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } catch (err) {
            console.error('Erreur d\'envoi:', err);
            
            if (err.response?.data?.errors) {
                setFieldErrors(err.response.data.errors);
            } else if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else if (err.code === 'ECONNABORTED') {
                setError('Le serveur ne répond pas. Veuillez réessayer ou nous contacter par email.');
            } else {
                setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.');
            }
        } finally {
            setLoading(false);
        }
    };

    // Coordonnées mises à jour
    const contactInfo = {
        address: "Immeuble N° 22, Rue Jbel Moussa, Agdal, Rabat, Maroc",
        phones: [
            { number: "+212 665 654 031", label: "Standard" },
            { number: "+212 6XX XXX XXX", label: "WhatsApp" }
        ],
        email: "contact@ifdce.com",
        hours: "Lundi - Vendredi: 8h00 - 17h00",
        saturday: "Samedi: 8h00 - 12h00"
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contactez-nous
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Nous sommes là pour répondre à toutes vos questions concernant 
                        nos formations diplômantes, la VAE et nos programmes en ligne.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Informations de Contact
                            </h2>
                            <p className="text-gray-600 mb-8">
                                N'hésitez pas à nous contacter pour toute question concernant nos formations 
                                diplômantes, la Validation des Acquis de l'Expérience (VAE) ou nos programmes 
                                en ligne. Notre équipe est disponible pour vous accompagner dans votre 
                                parcours professionnel.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                                    <p className="text-gray-600 whitespace-pre-line">
                                        {contactInfo.address}
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                                    <div className="space-y-1">
                                        {contactInfo.phones.map((phone, index) => (
                                            <p key={index} className="text-gray-600">
                                                <a href={`tel:${phone.number}`} className="hover:text-blue-600 transition-colors">
                                                    {phone.number} ({phone.label})
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Heures d'ouverture</h3>
                                    <p className="text-gray-600">
                                        {contactInfo.hours}<br />
                                        {contactInfo.saturday}<br />
                                        Dimanche: Fermé
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://www.instagram.com/ifdce/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.facebook.com/profile.php?id=61577004028188" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.04c-5.522 0-10 4.477-10 10 0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.201c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.874h2.773l-.443 2.89h-2.33v6.988C18.343 21.168 22 17.03 22 12.04c0-5.523-4.478-10-10-10z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Envoyez-nous un message
                        </h2>

                        {success && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                <p className="font-semibold">✅ Message envoyé avec succès !</p>
                                <p className="mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                            </div>
                        )}

                        {error && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                <p className="font-semibold">❌ Erreur</p>
                                <p className="mt-1">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Contact Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Type de demande *
                                </label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        fieldErrors.type ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                >
                                    <option value="general">Demande générale</option>
                                    <option value="vae">Validation des acquis (VAE)</option>
                                    <option value="formation">Formations diplômantes</option>
                                    <option value="conseil">Conseil en formation</option>
                                    <option value="support">Support technique</option>
                                </select>
                                {fieldErrors.type && (
                                    <p className="text-red-500 text-sm mt-1">{fieldErrors.type[0]}</p>
                                )}
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom complet *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        fieldErrors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {fieldErrors.name && (
                                    <p className="text-red-500 text-sm mt-1">{fieldErrors.name[0]}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        fieldErrors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {fieldErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">{fieldErrors.email[0]}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        fieldErrors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {fieldErrors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{fieldErrors.phone[0]}</p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sujet *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        fieldErrors.subject ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {fieldErrors.subject && (
                                    <p className="text-red-500 text-sm mt-1">{fieldErrors.subject[0]}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        fieldErrors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                    minLength="10"
                                />
                                {fieldErrors.message && (
                                    <p className="text-red-500 text-sm mt-1">{fieldErrors.message[0]}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Envoi en cours...
                                    </span>
                                ) : (
                                    'Envoyer le message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Notre Localisation
                    </h2>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-full h-96">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.714402618682!2d-6.848885346918367!3d33.9943205392242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c905acc4b17%3A0xc15b5e4b1a0705a!2sN%C2%B0%2022%20Rue%20Jbel%20Moussa%2C%20Rabat%2010000!5e1!3m2!1sfr!2sma!4v1749080156845!5m2!1sfr!2sma" 
                                width="100%" 
                                height="450"  
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localisation IFDCE"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}