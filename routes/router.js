const express = require("express")
const router = express.Router();
const fs = require('fs');
const librosRoutes = require('./libros.js')

router.use(librosRoutes)
module.exports = router;