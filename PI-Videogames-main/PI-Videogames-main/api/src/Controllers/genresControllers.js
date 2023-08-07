const { Genre } = require("../db");
const axios = require("axios");
const { APPI_KEY } = process.env;

// Lógica para crear un género en la base de datos
const createGenreDB = async (name) => {
  return await Genre.create({ name });
};

// Lógica para obtener todos los géneros de la base de datos
const getAllGenresDB = async () => {
  return await Genre.findAll();
};

// Lógica para obtener los géneros desde la API y guardarlos en la base de datos (si está vacía)
const getGenresFromAPIAndSaveToDB = async () => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${APPI_KEY}`);
    const genres = response.data.results;

    const dbGenres = await Genre.findAll();
    if (dbGenres.length === 0) {
      await Genre.bulkCreate(genres);
    }

    return genres;
  } catch (error) {
    throw new Error("Error al obtener los géneros de la API");
  }
};

module.exports = {
  createGenreDB,
  getAllGenresDB,
  getGenresFromAPIAndSaveToDB,
};
