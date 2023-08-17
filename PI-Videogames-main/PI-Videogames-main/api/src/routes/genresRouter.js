// // const {
//     //   createGenreHandlers,
//     //   getAllGenresHandlers,
//     //   getGenresFromAPIAndSaveToDBHandlers,
//     // } = require("../handlers/genresHandlers");
    
//     // router.get("/update-from-api", getGenresFromAPIAndSaveToDBHandlers);
//     // router.post("/", createGenreHandlers);
    
//     // module.exports = router;
    
    
    
    
//     const express = require("express");
    
//     const router = express.Router();
//     const {
//         genresHandler
//     } = require("../handlers/genresHandlers")
    
//     router.get("/", genresHandler);

//     module.exports = router;


const {Router} = require("express");

const {createGenreHandler} = require("../handlers/genresHandlers");
const {getGenresHandler} = require("../handlers/genresHandlers")

const genresRouter = Router();

genresRouter.post("/", createGenreHandler);
genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;