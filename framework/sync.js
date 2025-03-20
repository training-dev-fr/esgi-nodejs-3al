const {bdd} = require('./connection.js');
const Product = require('./../model/product.model.js');
const Category = require('./../model/category.model.js');

const sync = async () => {
    Product.belongsTo(Category);
    Category.hasMany(Product);
    await bdd.sync({force: true});
}

module.exports = sync;