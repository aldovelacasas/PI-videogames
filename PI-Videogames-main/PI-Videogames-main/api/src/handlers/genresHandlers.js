// // const { createGenreDB, getAllGenresDB, getGenresFromAPIAndSaveToDB } = require("../Controllers/genresControllers");

// // const createGenreHandlers = async (req, res) => {
// //   const { name } = req.body;

// //   try {
// //     const newGenre = await createGenreDB(name);
// //     res.status(201).json(newGenre);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // };

// // const getAllGenresHandlers = async (req, res) => {
// //   try {
// //     const genres = await getAllGenresDB();
// //     res.status(200).json(genres);
// //   } catch (error) {
// //     res.status(500).json({ error: "Error al obtener los géneros" });
// //   }
// // };

// // const getGenresFromAPIAndSaveToDBHandlers = async (req, res) => {
// //   try {
// //     const genres = await getGenresFromAPIAndSaveToDB();
// //     res.status(200).json(genres);
// //   } catch (error) {
// //     res.status(500).json({ error: "Error al obtener los géneros de la API" });
// //   }
// // };

// // module.exports = {
// //   createGenreHandlers,
// //   getAllGenresHandlers,
// //   getGenresFromAPIAndSaveToDBHandlers,
// // };




// const  getGenres = require('../Controllers/genresControllers')

// const genresHandler = async (req, res) => {

//     try {
//         const genres = await getGenres()

//         res.status(200).json(genres)
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }

// }

// module.exports = genresHandler



const {createGenreDb, getAllGenres} = require("../Controllers/genresControllers");

const createGenreHandler = async (req, res) => {
  const {id, name} = req.body;

  try {
    const newGenre = await createGenreDb(id,name);
    res.status(200).json(newGenre);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getGenresHandler = async (req, res) => {

  try {
      const response = await getAllGenres();
      res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

};

module.exports = {createGenreHandler,getGenresHandler };
