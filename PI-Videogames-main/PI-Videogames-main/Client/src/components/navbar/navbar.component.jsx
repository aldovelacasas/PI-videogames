import React, { useState } from 'react';
import './navbar.styles.css';

function Navbar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="search-Box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busqueda"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;
