const express = require('express');
const router = express.Router();
const {getAllSightings, getSightingsForResearcher, getSightingsForHabitat, getSightingsOfSpecies, addNewSighting, deleteSingleSighting} = require('../db/queries/sightingsQueries.js')

router.get('/', getAllSightings);
router.get('/species/:id', getSightingsOfSpecies);
router.get('/researchers/:id', getSightingsForResearcher);
router.get('/habitats/:id', getSightingsForHabitat);
router.post('/', addNewSighting);
router.delete('/:id', deleteSingleSighting);

module.exports = router;
