import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';


function Card({id, name, description, platforms, image, releaseDate, rating, genres}) {

  return (
    <div className="card-container">
    <Link to={`/detail/${id}`} >
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <p>{genres}</p>
    
    </Link> 
    </div>
  );
}

export default Card;
