const express = require('express');
const router = express.Router();
const { getAllSpecies, getSingleSpecies, addNewSpecies } = require('../db/queries/speciesQueries.js')

router.get('/', getAllSpecies);
router.get('/:id', getSingleSpecies);
router.post('/', addNewSpecies)

module.exports = router;
