const Joi = require('joi')



exports.testMiddleware = (req, res, next) => {

    req.session.test = 'Just tested if the express-session works!';

    next();
}

