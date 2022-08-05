const express = require("express");
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./countryRouter");
const activityRouter = require("./activityRouter")

const router = Router();
router.use(express.json());
router.use("/countries", countryRouter)
 router.use("/activity",activityRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
