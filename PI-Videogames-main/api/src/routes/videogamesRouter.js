const express = require("express");
const router = express.Router();
const {
  createVideogameHandlers,
  getAllVideogamesHandlers,
  getVideogameDetailHandlers,
  searchVideogamesHandlers,
} = require("../handlers/videogamesHandlers");

router.get("/", getAllVideogamesHandlers);
router.get("/search", searchVideogamesHandlers);
router.get("/:idVideogame", getVideogameDetailHandlers);
router.post("/", createVideogameHandlers);

module.exports = router;
