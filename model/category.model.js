const {bdd} = require('./../framework/connection.js');
const {DataTypes} = require('sequelize');

const Category = bdd.define(
    'category',
    {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }
);

module.exports = Category;