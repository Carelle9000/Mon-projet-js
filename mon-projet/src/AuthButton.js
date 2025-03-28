import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function AuthButton() {
    const { user, login, logout } = useContext(AuthContext);

    return (
        <div className="text-center font-bold  p-4">
            {user ? (
                <div>
                    <p className="mb-2 text-lg">Bienvenue, {user.name} !</p>
                    <button 
                        onClick={logout} 
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        🚪 Déconnexion
                    </button>
                </div>
            ) : (
                <button 
                    onClick={login} 
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
                >
                    🔑 Connexion
                </button>
            )}
        </div>
    );
}

export default AuthButton;
