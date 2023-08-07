const express = require("express");
const router = express.Router();
const {
  createVideogameHandlers,
  getAllVideogamesHandlers,
  getVideogameDetailHandlers,
  searchVideogamesHandlers,
} = require("../handlers/videogamesHandlers");

router.post("/", createVideogameHandlers);
router.get("/", getAllVideogamesHandlers);
router.get("/id/:idVideogame", getVideogameDetailHandlers);
router.get("/search", searchVideogamesHandlers);

module.exports = router;
