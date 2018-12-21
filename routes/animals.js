const express = require('express');
const router = express.Router();
const {getAllAnimals, getSingleAnimal, addNewAnimal, updateSingleAnimal, deleteSingleAnimal} = require('../db/queries/animalsQueries.js')

router.get('/', getAllAnimals);
router.get('/:id', getSingleAnimal);
router.post('/', addNewAnimal);
router.patch('/:id', updateSingleAnimal);
router.delete('/:id', deleteSingleAnimal);


module.exports = router;
