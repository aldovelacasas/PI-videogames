// const { Genres } = require("../db");
// const axios = require("axios");
// const { APPI_KEY } = process.env;

// // Lógica para crear un género en la base de datos
// const createGenreDB = async (name) => {
//   return await Genres.create({ name });
// };

// // Lógica para obtener todos los géneros de la base de datos
// const getAllGenresDB = async () => {
//   return await Genres.findAll();
// };

// // Lógica para obtener los géneros desde la API y guardarlos en la base de datos (si está vacía)
// const getGenresFromAPIAndSaveToDB = async () => {
//   try {
//     const response = await axios.get(`https://api.rawg.io/api/genres?key=${APPI_KEY}`);
//     const genres = response.data.results;
//     console.log(genres);

//     const dbGenres = await Genres.findAll();
//     if (dbGenres.length === 0) {
//       await Genres.bulkCreate(genres);
//     }

//     return genres;
//   } catch (error) {
//     throw new Error("Error al obtener los géneros de la API");
//   }
// };

// module.exports = {
//   createGenreDB,
//   getAllGenresDB,
//   getGenresFromAPIAndSaveToDB,
// };

const axios = require('axios');
const { APPI_KEY } = process.env;
const { Genres } = require('../db');

const URL = `https://api.rawg.io/api/genres?key=${APPI_KEY}`;

const getGenre = async () => {
  const response = await axios(URL);
  const genres = response.data.results;

  const genreRecords = await Promise.all(
    genres.map(async (genre) => {
      return await Genres.findOrCreate({
        where: {
          id: genre.id,
        },
        defaults: {
          name: genre.name,
        },
      });
    })
  );

  const savedGenres = genreRecords.map(([genre]) => genre.get());

  console.log(savedGenres);

  return savedGenres;
};

module.exports = getGenre;

