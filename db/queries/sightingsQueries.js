const { db } = require('./index.js')

const getAllSightings = (req, res, next) => {
  db.any('SELECT * FROM sightings')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all sightings",
      body: data
    });
  })
  .catch((err) => {
    return next(err);
  })
};

const getSightingsForResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.any('SELECT * FROM sightings WHERE researcher_id =$1', [researcherId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all sightings for a specific researcher",
      body: data
    })
  })
  .catch(err => {
    return next(err)
  })
};

const getSightingsOfSpecies = (req, res, next) => {
  let speciesId = parseInt(req.params.id);
  db.any('SELECT * FROM sightings WHERE species_id =$1', [speciesId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all sightings of a specific species",
      body: data
    })
  })
  .catch(err => {
    return next(err)
  })
};

const getSightingsForHabitat = (req, res, next) => {
  let habitatId = parseInt(req.params.id);
  db.any('SELECT * FROM sightings WHERE habitat_id =$1', [habitatId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all sightings for a specific habitat",
      body: data
    })
  })
  .catch(err => {
    return next(err)
  })
};

const addNewSighting = (req, res, next) => {
  req.body.species_id = parseInt(req.body.species_id);
  req.body.researcher_id = parseInt(req.body.researcher_id);
  req.body.habitat_id = parseInt(req.body.habitat_id);
  db.none('INSERT INTO sightings(researcher_id, species_id, habitat_id) VALUES(${researcher_id}, ${species_id}, ${habitat_id})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "added a new sighting"
    })
  })
  .catch(err => {
    return next(err)
  })
};

const deleteSingleSighting = (req, res, next) => {
  let sightingId = parseInt(req.params.id);
  db.result('DELETE FROM sightings WHERE id=$1', [sightingId])
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single sighting"
    })
  })
  .catch(err => {
    return next(err)
  })
};


module.exports = { getAllSightings, getSightingsForResearcher, getSightingsForHabitat, getSightingsOfSpecies, addNewSighting, deleteSingleSighting }
