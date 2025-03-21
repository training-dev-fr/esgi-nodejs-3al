const {bdd} = require('./../framework/connection.js');
const {DataTypes} = require('sequelize');

const User = bdd.define(
    'user',
    {
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(256),
            allowNull: false
        }
    }
);

module.exports = User;