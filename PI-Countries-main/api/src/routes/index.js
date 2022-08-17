const express = require("express");
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./countryRouter");
const countrySRouter = require("./CountrySRouter")
const activityRouter = require("./activityRouter");
const filterRouter = require("./filterRoutes");


const router = Router();
router.use(express.json());
router.use("/countries", countryRouter);
router.use("/countries/s", countrySRouter);
router.use("/activity",activityRouter);
router.use("/filter", filterRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
