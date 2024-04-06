var express = require('express');


var userController = require('../src/user/userController');
const router = express.Router();

router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/login').post(userController.loginUserControllerFn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserController);
router.route('/user/delete/:id').delete(userController.deleteUserController);



module.exports = router;
