import './cards.styles.css';
import Card from '../card/card.component';


function Cards({allVideogames}) {

    const videgamesList = allVideogames

  return (
    <div className="card-list">
      {videgamesList?.map((videogame) => (
        <Card videogame={videogame}/>
        
        ))}
    
    </div>
  );
}

export default Cards;
