import { createContext, useState } from "react";

// Création du contexte d'authentification
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Fonction de connexion
    const login = () => {
        setUser({ name: "Carelle Ornella" });
    };

    // Fonction de déconnexion
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
