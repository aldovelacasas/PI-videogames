const { createVideogameDB, getAllVideogamesDB, getVideogameDetail, searchVideogamesByNameDB } = require("../Controllers/VideogameControllers");
//pad vacio de muestra
const createVideogameHandlers = async (req, res) => {
  const { name, description, platforms, image, releaseDate, rating } = req.body;

  try {
    const newVideogame = await createVideogameDB(name, description, platforms, image, releaseDate, rating);
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllVideogamesHandlers = async (req, res) => {
  try {
    const videogames = await getAllVideogamesDB();
    console.log(videogames)
    res.status(200).json(videogames);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los videojuegos" });
  }
};

const getVideogameDetailHandlers = async (req, res) => {
  const { idVideogame } = req.params;
  

  try {
    const videogame = await getVideogameDetail(idVideogame);
    if (!videogame) {
      return res.status(200).json({ error: "No se encontró el videojuego" });
    }
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener el detalle del videojuego" });
  }
};

const searchVideogamesHandlers = async (req, res) => {
    
    
    try {
      const name = req.query.name;
      
     
      const videogames = await searchVideogamesByNameDB(name);
    if (!videogames) {
      return res.status(200).json({ error: `No se encontraron videojuegos con el nombre: ${name}` });
    }
    res.status(200).json(videogames);
  } catch (error) {
    res.status(404).json({ error: "Error en la búsqueda de videojuegos" });
  }
};

module.exports = {
  createVideogameHandlers,
  getAllVideogamesHandlers,
  getVideogameDetailHandlers,
  searchVideogamesHandlers,
};
