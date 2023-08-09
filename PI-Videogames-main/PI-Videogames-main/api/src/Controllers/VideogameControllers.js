const { Videogame, Genres } = require("../db");
const { APPI_KEY } = process.env;
const axios = require("axios");


// Lógica para crear un videojuego en la base de datos
const createVideogameDB = async (name, description, platforms, image, releaseDate, rating) => {
  return await Videogame.create({
    name: name.toLowerCase(),
    description,
    platforms,
    image,
    releaseDate,
    rating,
  });
};

 // Lógica para obtener los videojuegos de la base de datos o de la API
const getAllVideogamesDB = async () => {
    try {
      // Intentamos obtener los videojuegos de la base de datos
      const videogamesFromDB = await Videogame.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
          model: Genres,
          attributes: ['name'],
          through: { attributes: [] },
          as: 'Genres'
        }]
      });
  
      // Si encontramos videojuegos en la base de datos, los devolvemos
      if (videogamesFromDB && videogamesFromDB.length > 0) {
        return videogamesFromDB;
      }
  
      // Si no encontramos videojuegos en la base de datos, buscamos en la API
      const response = await axios.get(`https://api.rawg.io/api/games?key=${APPI_KEY}`);
      const apiResults = response.data.results;
  
      // Mapeamos los resultados de la API para obtener solo los datos que necesitamos
      const mappedResults = apiResults.map((gameData) => ({
        id: gameData.id,
        name: gameData.name,
        description: gameData.description,
        platforms: gameData.platforms.map((platform) => platform.platform.name),
        image: gameData.background_image,
        releaseDate: gameData.released,
        rating: gameData.rating,
        genres: gameData.genres.map((genre) => genre.name),
      }));
  
      // Devolvemos los resultados de la API
      return mappedResults;
    } catch (error) {
      throw new Error("Error al obtener los videojuegos");
    }
  };


// Lógica para obtener el detalle de un videojuego por su ID (desde la API o base de datos)
const getVideogameDetail = async (id) => {
  // Primero intentamos buscar el videojuego en la base de datos
  if(id.length > 10){
  let videogame = await Videogame.findByPk(id, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [{
      model: Genres,
      attributes: ['name'],
      through: { attributes: [] },
      as: 'Genres'
    }]
  })
  return videogame;
}
  // Si el videojuego no se encuentra en la base de datos, lo buscamos en la API
  
    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APPI_KEY}`);
    const gameData = response.data;

    
      const videogame = {
      id: gameData.id,  
      name: gameData.name,
      description: gameData.description,
      platforms: gameData.platforms.map((platform) => platform.platform.name),
      image: gameData.background_image,
      releaseDate: gameData.released,
      rating: gameData.rating,
      genres: gameData.genres.map((genre) => genre.name),
    };
  

  return videogame;
};


const searchVideogamesByNameDB = async (name) => {
    try {
      // Buscar videojuegos por nombre en la base de datos
      const dbResults = await Videogame.findOne({
        where: {
          name: `${name}`
        },
        include: Genres,
        limit: 15,
      });
  
      // Si encontramos videojuegos en la base de datos, los devolvemos
      if (dbResults) {
        return dbResults;
      }
  
      // Si no encontramos videojuegos en la base de datos, buscamos en la API
      const response = await axios.get(`https://api.rawg.io/api/games?key=${APPI_KEY}&search=${name}`);
      const apiResults = response.data.results;
       
      // Mapeamos los resultados de la API para obtener solo los datos que necesitamos
      const mappedResults = apiResults.map((gameData) => ({
        id: gameData.id,
        name: gameData.name,
        description: gameData.description,
        platforms: gameData.platforms.map((platform) => platform.platform.name),
        image: gameData.background_image,
        releaseDate: gameData.released,
        rating: gameData.rating,
        genres: gameData.genres.map((genre) => genre.name),
      }));
  
      // Devolvemos la combinación de resultados de la base de datos y la API
      return mappedResults;
    } catch (error) {
      throw new Error("Error en la búsqueda de videojuegos");
    }
  };

module.exports = {
  createVideogameDB,
  getAllVideogamesDB,
  getVideogameDetail,
  searchVideogamesByNameDB,
};
