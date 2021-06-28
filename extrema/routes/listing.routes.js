const {authListings, authPage} = require("../auth/middleware");


module.exports = app => {
    var router = require('express').Router();
    const users = require('../controller/users.controller');

    router.get("/:id", authPage(["admin"]), users.findById);

    app.use('/api/listings', router);
}