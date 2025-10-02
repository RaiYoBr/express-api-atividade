const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

router.get('/', UserController.list);
router.post('/', UserController.create);

module.exports = router;

