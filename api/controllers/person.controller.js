const db = require("../models");
const Person = db.persons;
const Op = db.Sequelize.Op;

// Create and Save a new Person
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.season || !req.body.activity || !req.body.location) {
    res.status(400).send({
      message: "Required fields can not be empty!"
    });
    return;
  }

  // Create a Person
  const person = {
    name: req.body.name,
    age: req.body.age ? req.body.age : null,
    season: req.body.season,
    reason: req.body.reason ? req.body.reason : '',
    activity: req.body.activity,
    location: req.body.location
  };

  // Save Person in the database
  Person.create(person)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person."
      });
    });
};

// Retrieve all Persons from the database.
exports.findAll = (req, res) => {
    console.log(req.query);
    const actQry = req.query.activity;
    var condition = actQry ?  {activity: actQry}  : null;
    Person.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred whie retrieving persons.'
        });
    });
};

// Find a single Person with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Person.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Person with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving Person with id=" + id
        });
    });
};

// Update a Person by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Person.update(req.body, {
      where: { id: id },
      returning: true
    })
    .then(num => {
      if (num[0] == 1) {
        res.send(num[1][0]);
      } else {
        res.send({
          message: num//`Cannot update Person with id=${id}. Maybe Person was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Person with id=" + id
      });
    });
};
exports.findAllQueried = (req, res) => {
    let activityQry = req.query.activity;
    Person.findAll({ where: {
        activity: activityQry
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Persons."
        });
    });
};