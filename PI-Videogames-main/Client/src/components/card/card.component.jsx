import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';



function Card({id, name, description, platforms, image, releaseDate, rating}) {
// const {id, name, description, platforms, image, releaseDate, rating} = videogame

  return (
    <div className="card-container">
    <Link to={`/detail/${id}`} >
    <h2>{name}</h2>
     <p>{description}</p>
     <p>{platforms.join(", ")}</p>
     <img src={image} alt={name} />
     <p>{releaseDate}</p>
     <p>{rating}</p>
    </Link> 
    </div>
  );
}

export default Card;
