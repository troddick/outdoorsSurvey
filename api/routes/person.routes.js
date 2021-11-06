module.exports = app => {
    const persons = require("../controllers/person.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Person
    router.post("/", persons.create);
  
    // Retrieve all Persons
    router.get("/", persons.findAll);
  
    // Retrieve filtered Persons
  //  router.get("/filtered", persons.findAllQueried);

    // Retrieve a single Person with id
    router.get("/:id", persons.findOne);
  
    // Update a Person with id
    router.put("/:id", persons.update);
  
    app.use('/api/persons', router);
  };