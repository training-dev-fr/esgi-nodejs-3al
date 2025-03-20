const Sequelize = require('sequelize');

let bdd = new Sequelize("esgi-nodejs", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

let connect = async () => {
    try {
        await bdd.authenticate();
        console.log("Connection has been established successfully");
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}

module.exports = { connect, bdd };