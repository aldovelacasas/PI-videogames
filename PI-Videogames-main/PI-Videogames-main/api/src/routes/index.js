// const { Router } = require('express');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const genresRouter = require("./genresRouter")
// const videogamesRouter = require("./videogamesRouter");
// const genresHandler = require('../handlers/genresHandlers');


// const router = Router();

// router.use("/videogames", videogamesRouter);
// router.use("/genres", genresHandler);




// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);


// module.exports = router;


const {Router} = require("express");
const genresRouter = require("./genresRouter");
const videogamesRouter = require("./videogamesRouter");
const router = Router();


router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);

module.exports = router;