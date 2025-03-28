import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date_naiss: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value) error = "Ce champ est obligatoire";
    else if (name === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))
      error = "Email invalide";
    else if (name === "password" && value.length < 6)
      error = "Le mot de passe doit contenir au moins 6 caractères";
    setErrors({ ...errors, [name]: error });
  };


  const calculateAge = (date_naiss) => dayjs().diff(dayjs(date_naiss), "year");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification des erreurs
    if (Object.values(errors).some((err) => err) || Object.values(formData).some((val) => !val)) {
      alert("Veuillez corriger les erreurs");
      return;
    }

    // Affichage des données dans la console
    console.log("Données du formulaire :", formData);

    // Redirection vers la page de bienvenue
    navigate("/welcome", { state: { ...formData, age: calculateAge(formData.dob) } });
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Connexion</h2>
        {Object.keys(formData).map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "password" ? "password" : field === "date_naiss" ? "date" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">Se connecter</button>
      </form>
    </div>
  );
};

const WelcomePage = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">Bienvenue, {state?.firstName} {state?.lastName} ! 🎉</h1>
      <p className="text-lg text-gray-700">Vous avez {state?.age} ans.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
