const express = require('express');
const productController = require('./../controller/product.controller.js');

const router = express.Router();

router.get('/:id',productController.getById);
router.get('/',productController.getAll);
router.post('/',productController.create);
router.put('/:id',productController.update);
router.delete('/:id',productController.delete);


module.exports = router;