const { Videogame, Genres } = require("../db");
const { APPI_KEY } = process.env;
const axios = require("axios");

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

const getAllVideogamesDB = async () => {
  const dbResults = await Videogame.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [{
      model: Genres,
      attributes: ['name'],
      through: { attributes: [] },
      as: 'Genres'
    }],
  });

  if (dbResults && dbResults.length > 0) {
    return dbResults;
  }

const videogames = [] //lista acumulable de los videojuegos

   //metemos un lopp para poder traer mas de 20 juegos
   let api = `https://api.rawg.io/api/games?key=${APPI_KEY}`
   for (let i = 1 ; i <= 5; i++) {
  const response = await axios.get(api);
  const apiResults = response.data.results;

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

  videogames.push(...mappedResults);
  api = response.data.next
};
return videogames
}
const getVideogameDetail = async (id) => {
  if (id.length > 10) {
    const videogame = await Videogame.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [{
        model: Genres,
        attributes: ['name'],
        through: { attributes: [] },
        as: 'Genres'
      }]
    });
    return videogame;
  }

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
  const dbResults = await Videogame.findOne({
    where: {
      name: `${name}`
    },
    include: Genres,
    limit: 15,
  });

  if (dbResults) {
    return dbResults;
  }

  const response = await axios.get(`https://api.rawg.io/api/games?key=${APPI_KEY}&search=${name}`);
  const apiResults = response.data.results;

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

  return mappedResults;
};

module.exports = {
  createVideogameDB,
  getAllVideogamesDB,
  getVideogameDetail,
  searchVideogamesByNameDB,
};
