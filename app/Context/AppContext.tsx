"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the Context type
interface AppContextType {
    ShowSection: boolean;
    toggleDarkMode: () => void;
    currentLanguage: string;
    changeLanguage: (lang: string) => void;
}

// Create the Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ShowSection, setShowSection] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string>('ar'); // Default language is Arabic

    const toggleDarkMode = () => setShowSection((prev) => !prev);

    const changeLanguage = (lang: string) => {
        setCurrentLanguage(lang);
    };

    return (
        <AppContext.Provider value={{ ShowSection, toggleDarkMode, currentLanguage, changeLanguage }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom Hook for accessing the context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
