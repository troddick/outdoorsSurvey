// exports configuring parameters for PostgreSQL connection & Sequeliz
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "LovesN@ture",
    DB: "outdoordb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};