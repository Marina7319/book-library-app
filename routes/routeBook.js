var express = require('express');
var userController = require('../src/book/bookController');

const router = express.Router();

router.route('/book/getAll').get(bookController.getBookControllerFunction());