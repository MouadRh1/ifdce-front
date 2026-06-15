import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../config/api';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Utiliser le contexte d'authentification
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field-specific errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await api.post('/login', {
        email: formData.email,
        password: formData.password,
      });


      // Utiliser la fonction login du contexte
      if (response.data.user && response.data.token) {
        login(response.data.user, response.data.token);
        
        alert('Login successful! Welcome back.');
        
        // Rediriger vers la page d'accueil ou le profil
        navigate('/');
      } else {
        setErrors({ general: 'Réponse invalide du serveur' });
      }
      
    } catch (error) {
      
      if (error.response?.status === 401) {
        setErrors({ general: 'Email ou mot de passe incorrect' });
      } else if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else if (error.response?.data?.message) {
        setErrors({ general: error.response.data.message });
      } else if (error.code === 'ECONNABORTED') {
        setErrors({ general: 'Le serveur ne répond pas. Veuillez réessayer.' });
      } else {
        setErrors({ general: 'Login failed. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="max-w-md mx-auto px-4 w-full">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Error Message */}
            {errors.general && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline disabled:opacity-50 transition-colors duration-200"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/authentification" 
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}