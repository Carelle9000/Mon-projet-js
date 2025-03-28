import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
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

  const calculateAge = (dob) => dayjs().diff(dayjs(dob), "year");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err) || Object.values(formData).some((val) => !val)) {
      alert("Veuillez corriger les erreurs");
      return;
    }
    navigate("/welcome", { state: { ...formData, age: calculateAge(formData.dob) } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Connexion</h2>
        {Object.keys(formData).map((field) => (
          <div key={field} className="mb-4">
            <label className="block mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "password" ? "password" : field === "dob" ? "date" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Se connecter</button>
      </form>
    </div>
  );
};

const WelcomePage = ({ location }) => {
  const { state } = location;
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Bienvenue, {state.firstName} {state.lastName} ! 🎉</h1>
      <p className="text-lg">Vous avez {state.age} ans.</p>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  </Router>
);

export default App;
