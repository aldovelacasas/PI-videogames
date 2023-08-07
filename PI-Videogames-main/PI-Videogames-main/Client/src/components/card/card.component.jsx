import './card.styles.css';



function Card({videogame}) {
const {name, description, platforms, image, releaseDate, rating} = videogame

  return (
    <div className="card-container">
      
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{platforms.join(", ")}</p>
    <img src={image} alt={name} />
    <p>{releaseDate}</p>
    <p>{rating}</p>

    
    
    </div>
  );
}

export default Card;
