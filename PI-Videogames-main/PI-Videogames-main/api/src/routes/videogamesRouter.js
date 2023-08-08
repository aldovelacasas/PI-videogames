const express = require("express");
const router = express.Router();
const {
  createVideogameHandlers,
  getAllVideogamesHandlers,
  getVideogameDetailHandlers,
  searchVideogamesHandlers,
} = require("../handlers/videogamesHandlers");

router.get("/search", searchVideogamesHandlers);
router.get("/id/:idVideogame", getVideogameDetailHandlers);
router.post("/", createVideogameHandlers);
router.get("/", getAllVideogamesHandlers);

module.exports = router;
