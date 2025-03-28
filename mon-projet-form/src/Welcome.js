import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const { nom, prenom, age } = location.state || { nom: '', prenom: '', age: '' };

  return (
    <div>
      <h2>Bienvenue, {`${prenom} ${nom}`}!</h2>
      <p>Vous avez {age} ans.</p>
    </div>
  );
};

export default Welcome;