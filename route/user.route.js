const express = require('express');
const userController = require('./../controller/user.controller.js');

const router = express.Router();

router.get('/:id',userController.getById);
router.get('/',userController.getAll);
router.put('/:id',userController.update);
router.delete('/:id',userController.delete);


module.exports = router;