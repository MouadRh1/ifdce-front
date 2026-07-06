// src/pages/VAERequest.jsx
import { useState } from 'react';
import SEO from '../component/SEO';
import api from '../config/api';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  experienceYears: '',
  domain: '',
  experience: '',
  targetDiploma: '',
  field: '',
  message: '',
};

const REQUIRED_FIELDS = ['fullName', 'email', 'phone', 'experienceYears', 'domain', 'experience', 'targetDiploma', 'field'];

/* ── Helpers définis EN DEHORS du composant pour éviter le re-mount à chaque render ── */
const inputClass = (name, errors) =>
  `w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
    errors[name]
      ? 'border-red-400 focus:ring-red-200'
      : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
  }`;

const Field = ({ label, name, required, hint, errors, children }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {hint && !errors[name] && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
    {errors[name] && (
      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
        <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {errors[name]}
      </p>
    )}
  </div>
);

export default function VAERequest() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  /* ── Handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError(null);
  };

  const validate = () => {
    const newErrors = {};
    REQUIRED_FIELDS.forEach((key) => {
      if (!formData[key]?.trim()) {
        newErrors[key] = 'Ce champ est obligatoire.';
      }
    });
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }
    if (formData.experience && formData.experience.length < 10) {
      newErrors.experience = 'La description doit contenir au moins 10 caractères.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = document.querySelector('.border-red-400');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setSubmitting(true);
    try {
      const response = await api.post('/vae/request', formData);
      if (response.data.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setServerError(response.data.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        const serverErrors = error.response.data.errors;
        const formattedErrors = {};
        const fieldMap = {
          'fullName': 'fullName',
          'full_name': 'fullName',
          'experienceYears': 'experienceYears',
          'experience_years': 'experienceYears',
          'targetDiploma': 'targetDiploma',
          'target_diploma': 'targetDiploma',
        };
        Object.keys(serverErrors).forEach(key => {
          const formKey = fieldMap[key] || key;
          formattedErrors[formKey] = Array.isArray(serverErrors[key])
            ? serverErrors[key][0]
            : serverErrors[key];
        });
        setErrors(formattedErrors);
        setServerError('Veuillez corriger les erreurs ci-dessous.');
        const firstErrorField = document.querySelector('.border-red-400');
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (error.response?.data?.message) {
        setServerError(error.response.data.message);
      } else if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
        setServerError('Le serveur ne répond pas. Veuillez réessayer.');
      } else if (error.message === 'Network Error') {
        setServerError('Erreur de connexion. Vérifiez votre connexion internet.');
      } else {
        setServerError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <>
        <SEO title="Demande de VAE envoyée" />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Demande envoyée avec succès</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Merci, <strong>{formData.fullName}</strong>. Un conseiller VAE étudiera votre dossier et vous contactera
            à l'adresse <strong>{formData.email}</strong> sous 48 h ouvrées.
          </p>
          <button
            onClick={() => {
              setFormData(INITIAL_FORM);
              setSubmitted(false);
              setErrors({});
              setServerError(null);
            }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Soumettre une nouvelle demande
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Demande de VAE" />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ── Hero banner ── */}
        <div className="bg-blue-700 rounded-xl p-8 mb-8 text-white">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-md px-3 py-1 text-xs text-blue-100 mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Validation des Acquis de l'Expérience
          </span>
          <h1 className="text-2xl font-bold mb-2">Demandez votre VAE</h1>
          <p className="text-blue-100 text-sm leading-relaxed">
            Faites reconnaître officiellement votre expérience professionnelle et obtenez un diplôme national. Un conseiller dédié vous accompagne à chaque étape.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { step: '1', title: 'Soumission', desc: 'Remplissez ce formulaire en ligne' },
            { step: '2', title: 'Étude du dossier', desc: 'Un conseiller analyse votre profil' },
            { step: '3', title: 'Accompagnement', desc: "Suivi personnalisé jusqu'au diplôme" },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <span className="w-6 h-6 shrink-0 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-semibold">
                {step}
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Server Error Banner ── */}
        {serverError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-medium">Erreur</p>
              <p>{serverError}</p>
            </div>
          </div>
        )}

        {/* ── Form card ── */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">

            {/* ── Section 1 : Informations personnelles ── */}
            <div className="px-8 py-6">
              <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-5">
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Nom complet" name="fullName" required errors={errors}>
                  <input
                    id="fullName" name="fullName" type="text"
                    placeholder="Ex. : Fatima Benali"
                    value={formData.fullName} onChange={handleChange}
                    className={inputClass('fullName', errors)}
                  />
                </Field>

                <Field label="Adresse e-mail" name="email" required errors={errors}>
                  <input
                    id="email" name="email" type="email"
                    placeholder="exemple@mail.com"
                    value={formData.email} onChange={handleChange}
                    className={inputClass('email', errors)}
                  />
                </Field>

                <Field label="Téléphone" name="phone" required errors={errors}>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+212 6XX XXX XXX"
                    value={formData.phone} onChange={handleChange}
                    className={inputClass('phone', errors)}
                  />
                </Field>

                <Field label="Ville de résidence" name="city" errors={errors}>
                  <input
                    id="city" name="city" type="text"
                    placeholder="Ex. : Casablanca"
                    value={formData.city} onChange={handleChange}
                    className={inputClass('city', errors)}
                  />
                </Field>
              </div>
            </div>

            {/* ── Section 2 : Expérience ── */}
            <div className="px-8 py-6">
              <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-5">
                Expérience professionnelle
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <Field label="Années d'expérience" name="experienceYears" required errors={errors}>
                  <select
                    id="experienceYears" name="experienceYears"
                    value={formData.experienceYears} onChange={handleChange}
                    className={inputClass('experienceYears', errors)}
                  >
                    <option value="">Sélectionner…</option>
                    <option value="lt3">Moins de 3 ans</option>
                    <option value="3-5">3 à 5 ans</option>
                    <option value="5-10">5 à 10 ans</option>
                    <option value="gt10">Plus de 10 ans</option>
                  </select>
                </Field>

                <Field label="Domaine d'activité" name="domain" required errors={errors}>
                  <select
                    id="domain" name="domain"
                    value={formData.domain} onChange={handleChange}
                    className={inputClass('domain', errors)}
                  >
                    <option value="">Sélectionner…</option>
                    <option value="commerce">Commerce & Vente</option>
                    <option value="informatique">Informatique & Digital</option>
                    <option value="sante">Santé & Social</option>
                    <option value="btp">BTP & Industrie</option>
                    <option value="management">Management & RH</option>
                    <option value="finance">Finance & Comptabilité</option>
                    <option value="autre">Autre</option>
                  </select>
                </Field>
              </div>

              <Field
                label="Description de votre parcours"
                name="experience"
                required
                hint="Minimum 150 caractères recommandé pour une analyse précise."
                errors={errors}
              >
                <textarea
                  id="experience" name="experience"
                  rows={4}
                  placeholder="Décrivez vos postes occupés, vos missions principales et vos compétences clés…"
                  value={formData.experience} onChange={handleChange}
                  className={inputClass('experience', errors)}
                />
              </Field>
            </div>

            {/* ── Section 3 : Diplôme visé ── */}
            <div className="px-8 py-6">
              <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-5">
                Diplôme visé
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <Field label="Diplôme souhaité" name="targetDiploma" required errors={errors}>
                  <select
                    id="targetDiploma" name="targetDiploma"
                    value={formData.targetDiploma} onChange={handleChange}
                    className={inputClass('targetDiploma', errors)}
                  >
                    <option value="">Sélectionner…</option>
                    <option value="bts">BTS (Bac +2)</option>
                    <option value="licence">Licence Pro (Bac +3)</option>
                    <option value="master">Master (Bac +5)</option>
                    <option value="titre">Titre professionnel</option>
                  </select>
                </Field>

                <Field label="Spécialité / Filière" name="field" required errors={errors}>
                  <input
                    id="field" name="field" type="text"
                    placeholder="Ex. : Gestion des entreprises"
                    value={formData.field} onChange={handleChange}
                    className={inputClass('field', errors)}
                  />
                </Field>
              </div>

              <Field label="Informations complémentaires" name="message" errors={errors}>
                <textarea
                  id="message" name="message"
                  rows={3}
                  placeholder="Questions, contraintes de disponibilité, besoins particuliers…"
                  value={formData.message} onChange={handleChange}
                  className={inputClass('message', errors)}
                />
              </Field>
            </div>

            {/* ── Footer ── */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-xl">
              <div className="flex items-start gap-3 mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Vos données sont traitées de manière confidentielle et ne seront utilisées qu'à des fins
                  d'accompagnement VAE. Un conseiller vous contactera sous <strong>48 h ouvrées</strong>.
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-gray-400">
                  <span className="text-red-500">*</span> Champs obligatoires
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="/"
                    className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                  >
                    Annuler
                  </a>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer ma demande VAE
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}