import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date()); // Met à jour l'heure chaque seconde
        }, 1000);

        return () => clearInterval(interval); // Nettoyage lors du démontage
    }, []);

    return (
        <div className="text-center p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold">🕒 Horloge en temps réel</h1>
            <p className="text-lg mt-2">{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;
