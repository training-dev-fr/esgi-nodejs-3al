const Category = require('./../model/category.model.js');

exports.create = async (req,res,next) => {
    let category = await Category.create(req.body.category);
    res.status(201).json(category);
}

exports.update = async (req,res,next) => {
    let category = await Category.update({
        ...req.body.category
    },{where: {id: req.params.id}});
    res.status(201).json(category);
}

exports.delete = async (req,res,next) => {
    await Category.destroy({where: {id: req.params.id}});
    res.status(200).json({message: "Catégorie supprimé"});
}

exports.getById = async (req,res,next) => {
    let category = await Category.findOne({where: {id: req.params.id}});
    res.status(200).json(category);
}

exports.getAll = async (req,res,next) => {
    let categoryList = await Category.findAll();
    res.status(200).json(categoryList);
}