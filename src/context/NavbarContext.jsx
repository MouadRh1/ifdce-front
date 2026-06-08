// Create NavbarContext.jsx
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
    const [showDiplomDropdown, setShowDiplomDropdown] = useState(false);
    
    return (
        <NavbarContext.Provider value={{ 
            showDiplomDropdown, 
            setShowDiplomDropdown 
        }}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error('useNavbar must be used within NavbarProvider');
    }
    return context;
};