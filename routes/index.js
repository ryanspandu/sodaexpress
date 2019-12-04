const express = require('express');
const router = express.Router();

const IndexControllers = require('../app/controllers/IndexControllers');

/* GET home page. */
router.get('/', IndexControllers.index);

module.exports = router;
