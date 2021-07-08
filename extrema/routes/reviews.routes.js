
module.exports = app => {
    const reviews = require('../controller/reviews.controller');
    var router = require('express').Router();

    router.post("/postReview", reviews.review);

    app.use('/api/review', router);


};