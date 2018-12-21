const { db } = require('./index.js');

const getAllSpecies = (req, res, next) => {
  db.any('SELECT * FROM species')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all species",
      body: data
    });
  })
  .catch(err => {
    return next(err)
  })
};

const getSingleSpecies = (req, res, next) => {
  let speciesId = parseInt(req.params.id);
  db.one('SELECT * FROM species WHERE id=$1', [speciesId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got one species",
      body: data
    });
  })
  .catch(err => {
    return next(err)
  })
};

const addNewSpecies = (req, res, next) => {
  db.none('INSERT INTO species(spec_name, is_mammal) VALUES(${spec_name}, ${is_mammal})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "added a new species"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = { getAllSpecies, getSingleSpecies, addNewSpecies }
