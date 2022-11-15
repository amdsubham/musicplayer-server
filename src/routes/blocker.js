const express = require('express');

const BlockerController = require('../controllers/BlockerController');

const router = express.Router();

// CRUD user routes

router.get('/', BlockerController.read);
router.patch('/:id', BlockerController.update);

module.exports = router;
