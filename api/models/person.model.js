module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("persons", {
      name: { type: Sequelize.STRING },
      age: { type: Sequelize.INTEGER },
      season: { type: Sequelize.INTEGER },
      reason: { type: Sequelize.STRING },
      activity: { type: Sequelize.INTEGER },
      location: { type: Sequelize.INTEGER }
    }, {
      freezeTableName: true, 
      timestamps: false
    });
    return Person;
  };