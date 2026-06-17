import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LEVEL_CONFIG = {
  bachelor: { label: 'Bachelor', bar: '#6366F1', badge: '#eef2ff', text: '#4f46e5' },
  master:   { label: 'Master',   bar: '#10B981', badge: '#ecfdf5', text: '#059669' },
  doctorate:{ label: 'Doctorate',bar: '#A855F7', badge: '#f5f3ff', text: '#7c3aed' },
};

const API = 'https://linen-sheep-933989.hostingersite.com/api/diplomas';

function StatCard({ value, label, color }) {
  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      <span style={{ fontSize: 28, fontWeight: 700, color, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.5px' }}>
        {value}
      </span>
      <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </span>
    </div>
  );
}

function DiplomaCard({ diploma, onEdit, onDelete }) {
  const cfg = LEVEL_CONFIG[diploma.level] || LEVEL_CONFIG.bachelor;
  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #e5e7eb',
      borderRadius: 14,
      overflow: 'hidden',
      display: 'flex',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366F1'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(99,102,241,0.15)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'; }}
    >
      {/* Barre verticale niveau */}
      <div style={{ width: 4, background: cfg.bar, flexShrink: 0 }} />

      <div style={{ padding: '20px 20px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
              {diploma.name}
            </h3>
            <div style={{ marginTop: 6, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999,
                background: cfg.badge, color: cfg.text, letterSpacing: '0.04em'
              }}>
                {cfg.label}
              </span>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999,
                background: diploma.is_active ? '#ecfdf5' : '#fef2f2',
                color: diploma.is_active ? '#059669' : '#dc2626',
              }}>
                {diploma.is_active ? '● Active' : '○ Inactive'}
              </span>
            </div>
          </div>
          <span style={{
            fontSize: 20, fontWeight: 800, color: cfg.text,
            fontVariantNumeric: 'tabular-nums', flexShrink: 0,
          }}>
            {diploma.duration_years}
            <span style={{ fontSize: 10, fontWeight: 500, color: '#9ca3af', marginLeft: 2 }}>
              yr{diploma.duration_years > 1 ? 's' : ''}
            </span>
          </span>
        </div>

        {/* Description */}
        {diploma.description && (
          <p style={{
            margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.6,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {diploma.description}
          </p>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #f3f4f6' }}>
          <button onClick={() => onEdit(diploma)} style={{
            flex: 1, padding: '8px 0', borderRadius: 8, border: '1px solid #6366F1',
            background: 'transparent', color: '#4f46e5', fontSize: 13, fontWeight: 600,
            cursor: 'pointer', transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#eef2ff'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Modifier
          </button>
          <button onClick={() => onDelete(diploma.id)} style={{
            flex: 1, padding: '8px 0', borderRadius: 8, border: '1px solid #fca5a5',
            background: 'transparent', color: '#dc2626', fontSize: 13, fontWeight: 600,
            cursor: 'pointer', transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#fef2f2'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Supprimer
          </button>
        </div>

        <div style={{ fontSize: 11, color: '#d1d5db', textAlign: 'right', marginTop: -8 }}>
          {new Date(diploma.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
      {error && <span style={{ fontSize: 11, color: '#dc2626' }}>{error}</span>}
    </div>
  );
}

const inputStyle = {
  background: '#FFFFFF', border: '1px solid #d1d5db', borderRadius: 8,
  padding: '10px 14px', color: '#111827', fontSize: 14, outline: 'none',
  transition: 'border-color 0.15s', width: '100%', boxSizing: 'border-box',
};

export default function DiplomaDashboard() {
  const [diplomas, setDiplomas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDiploma, setEditingDiploma] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    name: '', description: '', duration_years: 3, level: 'bachelor', is_active: true
  });

  useEffect(() => { fetchDiplomas(); }, []);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3200);
  };

  const fetchDiplomas = async () => {
    setFetchLoading(true);
    try {
      const res = await axios.get(API);
      setDiplomas(res.data);
    } catch {
      showToast('Erreur lors du chargement.', 'error');
    } finally {
      setFetchLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', duration_years: 3, level: 'bachelor', is_active: true });
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
        await axios.put(`${API}/${editingDiploma.id}`, formData);
        showToast('Diplôme mis à jour avec succès.');
      } else {
        await axios.post(API, formData);
        showToast('Diplôme créé avec succès.');
      }
      fetchDiplomas();
      resetForm();
    } catch (error) {
      if (error.response?.data?.errors) setErrors(error.response.data.errors);
      else showToast('Erreur lors de la sauvegarde.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (diploma) => {
    setFormData({
      name: diploma.name, description: diploma.description || '',
      duration_years: diploma.duration_years, level: diploma.level, is_active: diploma.is_active,
    });
    setEditingDiploma(diploma);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer ce diplôme ? Cette action est irréversible.')) return;
    try {
      await axios.delete(`${API}/${id}`);
      showToast('Diplôme supprimé.');
      fetchDiplomas();
    } catch {
      showToast('Erreur lors de la suppression.', 'error');
    }
  };

  const active = diplomas.filter(d => d.is_active).length;
  const bachelors = diplomas.filter(d => d.level === 'bachelor').length;
  const masters = diplomas.filter(d => d.level === 'master').length;
  const doctorates = diplomas.filter(d => d.level === 'doctorate').length;

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', fontFamily: "'Inter', system-ui, sans-serif", color: '#111827' }}>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', top: 20, right: 20, zIndex: 9999,
          background: toast.type === 'error' ? '#fef2f2' : '#ecfdf5',
          border: `1px solid ${toast.type === 'error' ? '#fca5a5' : '#6ee7b7'}`,
          color: toast.type === 'error' ? '#dc2626' : '#059669',
          padding: '12px 18px', borderRadius: 10, fontSize: 13, fontWeight: 500,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          animation: 'fadeIn 0.2s ease',
        }}>
          {toast.type === 'error' ? '✕ ' : '✓ '}{toast.msg}
        </div>
      )}

      {/* Header */}
      <header style={{
        borderBottom: '1px solid #e5e7eb',
        padding: '0 32px',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg, #6366F1, #a855f7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14,
          }}>🎓</div>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.3px', color: '#111827' }}>AcadémieAdmin</span>
          <span style={{
            marginLeft: 4, fontSize: 11, padding: '2px 8px', borderRadius: 999,
            background: '#eef2ff', color: '#4f46e5', fontWeight: 600,
          }}>Diplômes</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={fetchDiplomas} style={{
            background: '#FFFFFF', border: '1px solid #e5e7eb', borderRadius: 8,
            padding: '7px 14px', color: '#6b7280', fontSize: 13, fontWeight: 500, cursor: 'pointer',
            transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
            onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
          >
            ↻ Actualiser
          </button>
          <button onClick={() => setShowForm(true)} style={{
            background: 'linear-gradient(135deg, #6366F1, #4f46e5)',
            border: 'none', borderRadius: 8, padding: '7px 16px',
            color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
            boxShadow: '0 2px 12px rgba(99,102,241,0.35)',
            transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.45)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(99,102,241,0.35)'}
          >
            + Nouveau diplôme
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 1180, margin: '0 auto', padding: '36px 24px' }}>

        {/* Page Title */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: '-0.6px', color: '#111827' }}>
            Programmes de diplômes
          </h1>
          <p style={{ margin: '6px 0 0', color: '#6b7280', fontSize: 14 }}>
            Gérez les filières et niveaux académiques de votre établissement.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 36 }}>
          <StatCard value={diplomas.length} label="Total" color="#111827" />
          <StatCard value={active} label="Actifs" color="#059669" />
          <StatCard value={bachelors} label="Bachelor" color="#4f46e5" />
          <StatCard value={masters} label="Master" color="#059669" />
        </div>

        {/* Grid */}
        {fetchLoading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#9ca3af', fontSize: 14 }}>
            Chargement des diplômes…
          </div>
        ) : diplomas.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '80px 0',
            border: '1px dashed #d1d5db', borderRadius: 16,
            background: '#FFFFFF',
          }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🎓</div>
            <p style={{ color: '#6b7280', fontSize: 15, margin: 0 }}>Aucun diplôme enregistré.</p>
            <p style={{ color: '#9ca3af', fontSize: 13, marginTop: 6 }}>
              Cliquez sur <strong style={{ color: '#4f46e5' }}>+ Nouveau diplôme</strong> pour commencer.
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {diplomas.map(diploma => (
              <DiplomaCard key={diploma.id} diploma={diploma} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {showForm && (
        <div
          onClick={(e) => e.target === e.currentTarget && resetForm()}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', zIndex: 500, padding: 16,
          }}
        >
          <div style={{
            background: '#FFFFFF', border: '1px solid #e5e7eb', borderRadius: 16,
            width: '100%', maxWidth: 460, padding: '28px 28px 24px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
          }}>
            {/* Modal header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: '#111827' }}>
                  {editingDiploma ? 'Modifier le diplôme' : 'Nouveau diplôme'}
                </h2>
                <p style={{ margin: '3px 0 0', fontSize: 12, color: '#6b7280' }}>
                  {editingDiploma ? `Édition de "${editingDiploma.name}"` : 'Remplissez les informations du programme'}
                </p>
              </div>
              <button onClick={resetForm} style={{
                background: '#f3f4f6', border: 'none', borderRadius: 6,
                width: 30, height: 30, cursor: 'pointer', color: '#6b7280', fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#e5e7eb'}
                onMouseLeave={e => e.currentTarget.style.background = '#f3f4f6'}
              >×</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Field label="Nom du diplôme *" error={errors.name?.[0]}>
                <input
                  type="text" name="name" value={formData.name}
                  onChange={handleInputChange} placeholder="ex. Informatique et Réseaux"
                  required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#6366F1'}
                  onBlur={e => e.target.style.borderColor = '#d1d5db'}
                />
              </Field>

              <Field label="Description" error={errors.description?.[0]}>
                <textarea
                  name="description" value={formData.description}
                  onChange={handleInputChange} rows={3}
                  placeholder="Présentation succincte du programme..."
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.5 }}
                  onFocus={e => e.target.style.borderColor = '#6366F1'}
                  onBlur={e => e.target.style.borderColor = '#d1d5db'}
                />
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Field label="Durée (années) *" error={errors.duration_years?.[0]}>
                  <select name="duration_years" value={formData.duration_years}
                    onChange={handleInputChange} required
                    style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#6366F1'}
                    onBlur={e => e.target.style.borderColor = '#d1d5db'}
                  >
                    {[1,2,3,4,5,6].map(y => <option key={y} value={y}>{y} an{y > 1 ? 's' : ''}</option>)}
                  </select>
                </Field>

                <Field label="Niveau *" error={errors.level?.[0]}>
                  <select name="level" value={formData.level} onChange={handleInputChange}
                    required style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#6366F1'}
                    onBlur={e => e.target.style.borderColor = '#d1d5db'}
                  >
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="doctorate">Doctorate</option>
                  </select>
                </Field>
              </div>

              {/* Toggle active */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: '#f9fafb', borderRadius: 10, padding: '12px 16px',
                border: '1px solid #e5e7eb',
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>Programme actif</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>Visible dans l'offre de formation</div>
                </div>
                <div
                  onClick={() => setFormData(p => ({ ...p, is_active: !p.is_active }))}
                  style={{
                    width: 44, height: 24, borderRadius: 999, cursor: 'pointer',
                    background: formData.is_active ? '#6366F1' : '#d1d5db',
                    position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 3, left: formData.is_active ? 22 : 3,
                    width: 18, height: 18, borderRadius: '50%', background: '#fff',
                    transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                  }} />
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 10, paddingTop: 4 }}>
                <button onClick={resetForm} style={{
                  flex: 1, padding: '11px 0', borderRadius: 9, border: '1px solid #d1d5db',
                  background: 'transparent', color: '#6b7280', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f3f4f6'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    flex: 2, padding: '11px 0', borderRadius: 9, border: 'none',
                    background: loading ? '#d1d5db' : 'linear-gradient(135deg, #6366F1, #4f46e5)',
                    color: loading ? '#9ca3af' : '#fff', fontSize: 14, fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: loading ? 'none' : '0 2px 12px rgba(99,102,241,0.35)',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!loading) e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.45)';
                  }}
                  onMouseLeave={e => {
                    if (!loading) e.currentTarget.style.boxShadow = '0 2px 12px rgba(99,102,241,0.35)';
                  }}
                >
                  {loading ? 'Sauvegarde…' : (editingDiploma ? 'Mettre à jour' : 'Créer le diplôme')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
        * { box-sizing: border-box; }
        select option { background: #FFFFFF; color: #111827; }
      `}</style>
    </div>
  );
}