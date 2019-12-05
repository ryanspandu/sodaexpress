const express = require('express');
const router = express.Router();

const IndexControllers = require('../app/controllers/IndexControllers');
const middleware = require('../app/middleware/middleware')

/* GET home page. */
router.get('/', IndexControllers.index);
router.get('/testmiddleware', middleware.testMiddleware, IndexControllers.testMiddleware)

module.exports = router;
