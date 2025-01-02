"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the Context type
interface AppContextType {
    ShowSection: boolean;
    toggleDarkMode: () => void;
    ShowLocation: boolean,
    toggleLocation: () => void,
    setBranch: (branch: string) => void,
    selectedBranch: string,
    users: boolean,
    toggleUser: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedBranch, setSelectedBranch] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("selectedBranch") || "MainBranch";
        }
        return "MainBranch";
    });

    useEffect(() => {
        localStorage.setItem("selectedBranch", selectedBranch);
    }, [selectedBranch]);


    const setBranch = (branch: string) => {
        setSelectedBranch(branch);
    };

    const [ShowSection, setShowSection] = useState<boolean>(false);

    const [ShowLocation, setShowLocation] = useState<boolean>(false);
    const [users, setUser] = useState<boolean>(false)
    const toggleUser = () => setUser(!users)

    const toggleDarkMode = () => setShowSection((prev) => !prev);

    const toggleLocation = () => setShowLocation((prev) => !prev);



    return (
        <AppContext.Provider value={{ users, toggleUser, selectedBranch, setBranch, ShowLocation, toggleLocation, ShowSection, toggleDarkMode }}>
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
