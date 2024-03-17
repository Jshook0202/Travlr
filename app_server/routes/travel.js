const express = require('express');
const router = express.Router();
const controller = require('../controllers/travelController');

/* GET travel page */
router.get('/', controller.travel);

module.exports = router;