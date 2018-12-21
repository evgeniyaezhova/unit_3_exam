const express = require('express');
const router = express.Router();
const {getAllResearchers, getSingleResearcher, addNewResearcher, updateSingleResearcher, deleteSingleResearcher} = require('../db/queries/researchersQueries.js')

router.get('/', getAllResearchers);
router.get('/:id', getSingleResearcher);
router.post('/', addNewResearcher);
router.patch('/:id', updateSingleResearcher);
router.delete('/:id', deleteSingleResearcher);


module.exports = router;
