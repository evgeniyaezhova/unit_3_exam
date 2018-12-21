const express = require('express');
const router = express.Router();
const { getAllHabitats, getSingleHabitat, addNewHabitat } = require('../db/queries/habitatsQueries.js')

router.get('/', getAllHabitats);
router.get('/:id', getSingleHabitat);
router.post('/', addNewHabitat)

module.exports = router;
