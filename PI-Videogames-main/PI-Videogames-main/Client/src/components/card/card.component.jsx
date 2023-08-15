import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';


function Card({id, name, description, platforms, image, releaseDate, rating, genres}) {

  return (
    <div className="card-container">
    <Link to={`/detail/${id}`} >
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <h3>{genres}</h3>
    </Link> 
    </div>
  );
}

export default Card;
