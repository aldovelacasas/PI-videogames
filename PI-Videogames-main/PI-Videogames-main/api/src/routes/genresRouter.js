const express = require("express");
const router = express.Router();
const {
  createGenreHandlers,
  getAllGenresHandlers,
  getGenresFromAPIAndSaveToDBHandlers,
} = require("../handlers/genresHandlers");

router.post("/", createGenreHandlers);
router.get("/", getAllGenresHandlers);
router.get("/update-from-api", getGenresFromAPIAndSaveToDBHandlers);

module.exports = router;
