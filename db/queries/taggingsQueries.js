const { db } = require('./index.js')

const getAllTaggings = (req, res, next) => {
  db.any('SELECT * FROM taggings')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all taggings",
      body: data
    });
  })
  .catch((err) => {
    return next(err);
  })
};

const getSingleTagging = (req, res, next) => {
  let taggingId = parseInt(req.params.id);
  db.one('SELECT * FROM taggings WHERE id=$1', [taggingId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got one tagging",
      body: data
    });
  })
  .catch(err => {
    return next(err)
  })
};

const getTaggingsForResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.any('SELECT * FROM taggings WHERE researcher_id =$1', [researcherId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all taggings performed by a specific researcher",
      body: data
    })
  })
  .catch(err => {
    return next(err)
  })
};

const getTaggingsForAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id);
  db.any('SELECT * FROM taggings WHERE animal_id =$1', [animalId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all taggings performed on a specific animal",
      body: data
    })
  })
  .catch(err => {
    return next(err)
  })
};

const addNewTagging = (req, res, next) => {
  req.body.animal_id = parseInt(req.body.animal_id);
  req.body.researcher_id = parseInt(req.body.researcher_id);
  db.none('INSERT INTO taggings(animal_id, researcher_id) VALUES(${animal_id}, ${researcher_id})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "added a new tagging"
    })
  })
  .catch(err => {
    return next(err)
  })
};


module.exports = { getAllTaggings, getSingleTagging, getTaggingsForResearcher, getTaggingsForAnimal, addNewTagging}
