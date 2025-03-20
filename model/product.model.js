const {bdd} = require('./../framework/connection.js');
const {DataTypes} = require('sequelize');

const Product = bdd.define(
    'product',
    {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        stock: {
            type: DataTypes.MEDIUMINT,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING(255)
        },
    }
);

module.exports = Product;