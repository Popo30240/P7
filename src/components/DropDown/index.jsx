import React, { useState } from 'react';
import './DropDown.scss';
import arrowIcon from '../../assets/icones/arrow_right.png'; 

function DropDown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="dropdown">
      <button className="dropdown__header" onClick={toggleDropdown}>
        <span className="dropdown__title">{title}</span>
        <img
          src={arrowIcon}
          alt="flèche"
          className={`dropdown__icon ${isOpen ? 'rotated' : ''}`}
        />
      </button>
      <div className={`dropdown__content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default DropDown;
