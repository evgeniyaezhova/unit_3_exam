const { db } = require('./index.js')

const getAllResearchers = (req, res, next) => {
  db.any('SELECT * FROM researchers')
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got all researchers",
      body: data
    });
  })
  .catch((err) => {
    return next(err);
  })
};

const getSingleResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.one('SELECT * FROM researchers WHERE id=$1', [researcherId])
  .then(data => {
    res.status(200)
    .json({
      status: "success",
      message: "got one resercher",
      body: data
    });
  })
  .catch(err => {
    return next(err)
  })
};

const addNewResearcher = (req, res, next) => {
  db.none('INSERT INTO researchers(res_name, job_title) VALUES(${res_name}, ${job_title})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "added a new researcher"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const updateSingleResearcher = (req, res, next) => {
  db.none('UPDATE researchers SET res_name=${res_name}, job_title=${job_title} WHERE id=${researcherId}', {
    researcherId: req.params.id,
    res_name: req.body.res_name,
    job_title: req.body.job_title,
  })
  .then(() => {
    res.status(200)
    .json({
      status: "success",
      message: "updated one researcher"
    });
  })
  .catch(err => {
    return next(err)
  })
};

const deleteSingleResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.result('DELETE FROM researchers WHERE id=$1', researcherId)
  .then(result => {
    res.status(200)
    .json({
      status: "success",
      message: "deleted a single researcher"
    });
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = { getAllResearchers, getSingleResearcher, addNewResearcher, updateSingleResearcher, deleteSingleResearcher };
