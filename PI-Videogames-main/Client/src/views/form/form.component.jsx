import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './form.styles.css';

function Form() {
  const [input, setInput] = useState({
    name: '',
    description: '',
    platforms: '',
    image: '',
    releaseDate: '',
    rating: '',
    genres: [] 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   };
   
   return (
    <div className="form-container">
    <Link to="/home" className="link">
      <span>HOME</span>
    </Link>

    <div className="form-header">
      <h2>Crea un nuevo videojuego</h2>
    </div>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          name="description"
          value={input.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Plataformas:</label>
        <input
          type="text"
          name="platforms"
          value={input.platforms}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Imagen:</label>
        <input
          type="text"
          name="image"
          value={input.image}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Fecha de lanzamiento:</label>
        <input
          type="text"
          name="releaseDate"
          value={input.releaseDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Rating:</label>
        <input
          type="text"
          name="rating"
          value={input.rating}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="button">
        Crear
      </button>
    </form>
  </div>
  );
}

export default Form;
