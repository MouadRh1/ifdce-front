import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const countryCodes = [
  { country: "Algeria", code: "+213" },
  { country: "Angola", code: "+244" },
  { country: "Benin", code: "+229" },
  { country: "Botswana", code: "+267" },
  { country: "Burkina Faso", code: "+226" },
  { country: "Burundi", code: "+257" },
  { country: "Cameroon", code: "+237" },
  { country: "Cape Verde", code: "+238" },
  { country: "Central African Republic", code: "+236" },
  { country: "Chad", code: "+235" },
  { country: "Comoros", code: "+269" },
  { country: "Congo (Brazzaville)", code: "+242" },
  { country: "Congo (Kinshasa)", code: "+243" },
  { country: "Djibouti", code: "+253" },
  { country: "Egypt", code: "+20" },
  { country: "Equatorial Guinea", code: "+240" },
  { country: "Eritrea", code: "+291" },
  { country: "Eswatini", code: "+268" },
  { country: "Ethiopia", code: "+251" },
  { country: "Gabon", code: "+241" },
  { country: "Gambia", code: "+220" },
  { country: "Ghana", code: "+233" },
  { country: "Guinea", code: "+224" },
  { country: "Guinea-Bissau", code: "+245" },
  { country: "Ivory Coast", code: "+225" },
  { country: "Kenya", code: "+254" },
  { country: "Lesotho", code: "+266" },
  { country: "Liberia", code: "+231" },
  { country: "Libya", code: "+218" },
  { country: "Madagascar", code: "+261" },
  { country: "Malawi", code: "+265" },
  { country: "Mali", code: "+223" },
  { country: "Mauritania", code: "+222" },
  { country: "Mauritius", code: "+230" },
  { country: "Morocco", code: "+212" },
  { country: "Mozambique", code: "+258" },
  { country: "Namibia", code: "+264" },
  { country: "Niger", code: "+227" },
  { country: "Nigeria", code: "+234" },
  { country: "Rwanda", code: "+250" },
  { country: "São Tomé and Príncipe", code: "+239" },
  { country: "Senegal", code: "+221" },
  { country: "Seychelles", code: "+248" },
  { country: "Sierra Leone", code: "+232" },
  { country: "Somalia", code: "+252" },
  { country: "South Africa", code: "+27" },
  { country: "South Sudan", code: "+211" },
  { country: "Sudan", code: "+249" },
  { country: "Tanzania", code: "+255" },
  { country: "Togo", code: "+228" },
  { country: "Tunisia", code: "+216" },
  { country: "Uganda", code: "+256" },
  { country: "Zambia", code: "+260" },
  { country: "Zimbabwe", code: "+263" }
];

export default function PhoneInput({ value, onChange, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Parse existing phone number to get country code and number
    const parsePhoneNumber = (phone) => {
        if (!phone) return { countryCode: '+33', phoneNumber: '' }; // Default to France
        
        // Find matching country code
        const matchedCountry = countryCodes.find(country => 
            phone.startsWith(country.code)
        );
        
        if (matchedCountry) {
            return {
                countryCode: matchedCountry.code,
                phoneNumber: phone.substring(matchedCountry.code.length).trim()
            };
        }
        
        // Default fallback
        return { countryCode: '+33', phoneNumber: phone };
    };

    const { countryCode, phoneNumber } = parsePhoneNumber(value);
    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCode);

    // Filter countries based on search
    const filteredCountries = countryCodes.filter(country =>
        country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.includes(searchTerm)
    );

    const handleCountrySelect = (code) => {
        setSelectedCountryCode(code);
        const newPhoneNumber = `${code} ${phoneNumber}`;
        onChange(newPhoneNumber);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handlePhoneNumberChange = (e) => {
        const newNumber = e.target.value;
        const fullPhoneNumber = `${selectedCountryCode} ${newNumber}`;
        onChange(fullPhoneNumber);
    };

    const selectedCountry = countryCodes.find(country => country.code === selectedCountryCode);

    return (
        <div className="relative">
            <div className="flex">
                {/* Country Code Selector */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => !disabled && setIsOpen(!isOpen)}
                        disabled={disabled}
                        className={`flex items-center gap-2 px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 transition-colors min-w-[120px] ${
                            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        }`}
                    >
                        <span className="text-sm font-medium">{selectedCountryCode}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                        <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-hidden">
                            {/* Search */}
                            <div className="p-3 border-b border-gray-200">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Rechercher un pays..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                    />
                                </div>
                            </div>

                            {/* Countries List */}
                            <div className="max-h-48 overflow-y-auto">
                                {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country) => (
                                        <button
                                            key={country.code}
                                            onClick={() => handleCountrySelect(country.code)}
                                            className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between ${
                                                selectedCountryCode === country.code ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                                            }`}
                                        >
                                            <span className="font-medium">{country.country}</span>
                                            <span className="text-sm text-gray-500">{country.code}</span>
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-3 text-gray-500 text-center">
                                        Aucun pays trouvé
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Phone Number Input */}
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    disabled={disabled}
                    placeholder="Numéro de téléphone"
                    className={`flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        disabled ? 'bg-gray-50 opacity-50 cursor-not-allowed' : ''
                    }`}
                />
            </div>

            {/* Selected Country Display */}
            {selectedCountry && (
                <div className="mt-1 text-xs text-gray-500">
                    {selectedCountry.country} ({selectedCountry.code})
                </div>
            )}

            {/* Click outside to close */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
}