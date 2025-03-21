const {bdd} = require('./../framework/connection.js');
const {DataTypes} = require('sequelize');

const Role = bdd.define(
    'role',
    {
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(3),
            allowNull: false
        }
    }
);

module.exports = Role;