const { db } = require('./index.js')

const getAllAnimals = (req, res, next) => {
  db.any('SELECT * FROM animals')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all animals",
      body: data
    });
  })
  .catch((err) => {
    return next(err);
  })
};

const getSingleAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id);
  db.one('SELECT * FROM animals WHERE id=$1', [animalId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got one animal",
      body: data
    });
  })
  .catch(err => {
    return next(err)
  })
};

const addNewAnimal = (req, res, next) => {
  req.body.species_id = parseInt(req.body.species_id);
  db.none('INSERT INTO animals(species_id, nickname) VALUES(${species_id}, ${nickname})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "added a new animal"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const updateSingleAnimal = (req, res, next) => {
  db.none('UPDATE animals SET species_id=${species_id}, nickname=${nickname} WHERE id=${animalId}', {
    animalId: req.params.id,
    species_id: req.body.species_id,
    nickname: req.body.nickname,
  })
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "updated one animal"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const deleteSingleAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id);
  db.result('DELETE FROM animals WHERE id=$1', animalId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single animal"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = { getAllAnimals, getSingleAnimal, addNewAnimal, updateSingleAnimal, deleteSingleAnimal };
