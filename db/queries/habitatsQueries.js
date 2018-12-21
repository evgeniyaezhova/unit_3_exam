const { db } = require('./index.js');

const getAllHabitats = (req, res, next) => {
  db.any('SELECT * FROM habitats')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all habitats",
      body: data
    });
  })
  .catch(err => {
    return next(err)
  })
};

const getSingleHabitat = (req, res, next) => {
  let habitatId = parseInt(req.params.id);
  db.one('SELECT * FROM habitats WHERE id=$1', [habitatId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got one habitat",
      body: data
    });
  })
  .catch(err => {
    return next(err)
  })
};

const addNewHabitat = (req, res, next) => {
  db.none('INSERT INTO habitats(category) VALUES(${category})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "added a new habitat"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = { getAllHabitats, getSingleHabitat, addNewHabitat }
