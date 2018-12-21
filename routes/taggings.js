const express = require('express');
const router = express.Router();
const {getAllTaggings, getSingleTagging, getTaggingsForResearcher, getTaggingsForAnimal, addNewTagging} = require('../db/queries/taggingsQueries.js')

router.get('/', getAllTaggings);
router.get('/:id', getSingleTagging);
router.get('/researchers/:id', getTaggingsForResearcher);
router.get('/animals/:id', getTaggingsForAnimal);
router.post('/', addNewTagging);


module.exports = router;
