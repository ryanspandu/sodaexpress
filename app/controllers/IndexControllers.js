

exports.index = (req, res, next) => {


    res.render('index', { title: 'Express'});
}

exports.testMiddleware = (req, res, next) => {

    let hello = req.session.test

    res.send(hello);
}

