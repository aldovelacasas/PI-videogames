import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import './detail.styles.css';

function Detail() {
  const { id } = useParams();
  const endpoint = (`http://localhost:3001/videogames/${id}`)
  const [videogame, setVideogame] = useState({})

  useEffect(() => {
  axios.get(endpoint).then(res => res.data).then(data => setVideogame(data))
  }, [])

  if (!videogame) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detail-container">
      <h1>{videogame.name}</h1>
      <p>{videogame.description}</p>
      <p>Plataformas: {videogame.platforms}</p>
      <img src={videogame.image} alt={videogame.name} />
      <p>Fecha de lanzamiento: {videogame.releaseDate}</p>
      <p>Rating: {videogame.rating}</p>
    </div>
  );
}

export default Detail;
