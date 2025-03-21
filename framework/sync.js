const {bdd} = require('./connection.js');
const Product = require('./../model/product.model.js');
const Category = require('./../model/category.model.js');
const User = require('./../model/user.model.js');
const Role = require('./../model/role.model.js');

const sync = async () => {
    Product.belongsTo(Category);
    Category.hasMany(Product);
    User.belongsToMany(Role,{through: 'user_has_role'});
    await bdd.sync({force: true});
}

module.exports = sync;