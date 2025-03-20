const express = require('express');
const categoryController = require('./../controller/category.controller.js');

const router = express.Router();

router.get('/:id',categoryController.getById);
router.get('/',categoryController.getAll);
router.post('/',categoryController.create);
router.put('/:id',categoryController.update);
router.delete('/:id',categoryController.delete);


module.exports = router;