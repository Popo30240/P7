import React, { useState } from 'react';
//import './DropDown.css'; // facultatif si tu veux styliser

function DropDown({ title, children }) {

  // Utilisation de useState pour gérer l'état d'ouverture du dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="dropdown">
      <button className="dropdown-header" onClick={toggleDropdown}>
        {title}
        <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default DropDown;