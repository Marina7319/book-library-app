var express = require('express');

var userController = require('../src/user/userController');

const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/book/getAll').get(userController.getBookConntrollerfn);
router.route('/book/create').post(userController.createBookControllerFn);
router.route('/book/update/:id').patch(userController.updateBookController);
router.route('/book/delete/:id').delete(userController.deleteBookController);

module.exports = router;
