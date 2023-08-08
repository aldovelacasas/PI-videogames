import React from 'react';
import Card from '../card/card.component';

import './cards.styles.css';

function Cards({ allVideogames }) {
  return (
    <div className="card-list">
      {allVideogames.map((videogame) => (
    
        <Card
          key={videogame.id}
          id={videogame.id}
          name={videogame.name}
          description={videogame.description}
          platforms={videogame.platforms}
          image={videogame.image}
          releaseDate={videogame.releaseDate}
          rating={videogame.rating}
        />
      ))}
    </div>
  );
}

export default Cards;
