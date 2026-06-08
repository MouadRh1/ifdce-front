import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from '../component/PhoneInput';
import api from '../config/api'; // Add this import

export default function Authentification() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [diplomas, setDiplomas] = useState([]);
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [availableFields, setAvailableFields] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const totalSteps = 4;
  const handlePhoneChange = (phoneNumber) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: phoneNumber
    }));
    
    // Clear phone number error if it exists
    if (errors.phoneNumber) {
      setErrors(prev => ({
        ...prev,
        phoneNumber: ''
      }));
    }
  };


  useEffect(() => {
    api.defaults.baseURL = 'http://localhost:8000/';
    api.defaults.headers.common['Accept'] = 'application/json';
    api.defaults.headers.common['Content-Type'] = 'application/json';
    
    fetchDiplomas();
  }, []);

  const fetchDiplomas = async () => {
    try {
      const response = await api.get('/api/diplomas');
      setDiplomas(response.data.filter(diploma => diploma.is_active));
    } catch (error) {
      console.error('Error fetching diplomas:', error);
    }
  };

  const fetchFieldsForDiploma = async (diplomaId) => {
    try {
      const response = await api.get(`/api/diplomas/${diplomaId}/fields`);
      setAvailableFields(response.data.filter(field => field.is_active));
    } catch (error) {
      console.error('Error fetching fields:', error);
      setAvailableFields([]);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear field-specific errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleDiplomaSelection = (diploma) => {
    setSelectedDiploma(diploma);
    setSelectedFields([]); // Reset selected fields
    fetchFieldsForDiploma(diploma.id);
  };

  const handleFieldToggle = (fieldId) => {
    setSelectedFields(prev => {
      if (prev.includes(fieldId)) {
        return prev.filter(id => id !== fieldId);
      } else {
        return [...prev, fieldId];
      }
    });
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = ['Name is required'];
        if (!formData.familyName.trim()) newErrors.familyName = ['Family name is required'];
        if (!formData.email.trim()) newErrors.email = ['Email is required'];
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = ['Email is invalid'];
        
        // Password validation
        if (!formData.password.trim()) newErrors.password = ['Password is required'];
        else if (formData.password.length < 8) newErrors.password = ['Password must be at least 8 characters'];
        
        if (!formData.password_confirmation.trim()) newErrors.password_confirmation = ['Password confirmation is required'];
        else if (formData.password !== formData.password_confirmation) newErrors.password_confirmation = ['Passwords do not match'];
        break;
      case 2:
        if (!formData.address.trim()) newErrors.address = ['Address is required'];
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = ['Phone number is required'];
        break;
      case 3:
        if (!selectedDiploma) newErrors.diploma = ['Please select a diploma'];
        break;
      case 4:
        if (selectedFields.length === 0) newErrors.fields = ['Please select at least one field'];
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setLoading(true);
    setErrors({});

    try {
      const diplomaFields = selectedFields.map(fieldId => ({
        diploma_id: selectedDiploma.id,
        field_id: fieldId
      }));

      const response = await api.post('/api/register', {
        name: `${formData.name} ${formData.familyName}`,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        address: formData.address,
        phone_number: formData.phoneNumber,
        diploma_fields: diplomaFields
      });
      
      console.log('Registration successful:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      alert('Registration successful! Your diploma field selections are pending approval.');
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else if (error.response?.data?.message) {
        setErrors({ general: error.response.data.message });
      } else {
        setErrors({ general: 'Registration failed. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-300 text-gray-600'
            }`}>
              {step}
            </div>
            {step < 4 && (
              <div className={`h-1 w-16 ml-2 ${
                step < currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>Personal Info</span>
        <span>Contact Details</span>
        <span>Select Diploma</span>
        <span>Choose Fields</span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? 'border-red-500' : ''
            }`}
            placeholder="Enter your first name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor="familyName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="familyName"
            name="familyName"
            value={formData.familyName}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.familyName ? 'border-red-500' : ''
            }`}
            placeholder="Enter your last name"
          />
          {errors.familyName && <p className="text-red-500 text-xs mt-1">{errors.familyName[0]}</p>}
        </div>
      </div>

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
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? 'border-red-500' : ''
          }`}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showPassword ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                )}
              </svg>
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>}
          <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
        </div>

        <div>
          <label htmlFor="password_confirmation" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password *
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="password_confirmation"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password_confirmation ? 'border-red-500' : ''
              }`}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showConfirmPassword ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                )}
              </svg>
            </button>
          </div>
          {errors.password_confirmation && <p className="text-red-500 text-xs mt-1">{errors.password_confirmation[0]}</p>}
        </div>
      </div>
    </div>
  );

  // Keep the other render methods (renderStep2, renderStep3, renderStep4) the same...
  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
      
      <div>
        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
          Address *
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.address ? 'border-red-500' : ''
          }`}
          placeholder="Enter your full address"
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address[0]}</p>}
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
          Phone Number *
        </label>
               <PhoneInput
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
        />
        {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
        <p className="mt-1 text-xs text-gray-500">
          Sélectionnez votre pays et entrez votre numéro de téléphone
        </p>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Your Diploma Program</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {diplomas.map((diploma) => (
          <div
            key={diploma.id}
            onClick={() => handleDiplomaSelection(diploma)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              selectedDiploma?.id === diploma.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
          >
            <h4 className="font-semibold text-gray-800">{diploma.name}</h4>
            <p className="text-sm text-gray-600 mt-1">
              {diploma.level.charAt(0).toUpperCase() + diploma.level.slice(1)} • {diploma.duration_years} years
            </p>
            {diploma.description && (
              <p className="text-xs text-gray-500 mt-2">{diploma.description}</p>
            )}
          </div>
        ))}
      </div>
      
      {errors.diploma && <p className="text-red-500 text-xs mt-2">{errors.diploma[0]}</p>}
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Choose Your Specialization Fields
      </h3>
      
      {selectedDiploma && (
        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          <p className="text-sm text-blue-800">
            <strong>Selected Diploma:</strong> {selectedDiploma.name} ({selectedDiploma.level})
          </p>
        </div>
      )}

      {availableFields.length > 0 ? (
        <div className="space-y-3">
          {availableFields.map((field) => (
            <label
              key={field.id}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                selectedFields.includes(field.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-300'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedFields.includes(field.id)}
                onChange={() => handleFieldToggle(field.id)}
                className="mr-3 rounded border-gray-300 text-blue-600"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-800">{field.name}</div>
                {field.description && (
                  <div className="text-sm text-gray-600">{field.description}</div>
                )}
                {field.max_students && (
                  <div className="text-xs text-gray-500">Max students: {field.max_students}</div>
                )}
              </div>
            </label>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>No fields available for this diploma.</p>
          <p className="text-sm">Please contact administration for more information.</p>
        </div>
      )}

      {selectedFields.length > 0 && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Selected Fields:</strong> {selectedFields.length}
          </p>
        </div>
      )}
      
      {errors.fields && <p className="text-red-500 text-xs mt-2">{errors.fields[0]}</p>}
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Create Your Account
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Complete the registration process in {totalSteps} simple steps
          </p>
          
          {renderProgressBar()}
          
          <div className="mb-8">
            {renderCurrentStep()}
          </div>

          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Complete Registration'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}