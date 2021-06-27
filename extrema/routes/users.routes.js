module.exports = app => {
    const users = require('../controller/users.controller');
    var router = require('express').Router();

    app.post("/register", users.register);

    app.post("/login", users.login);
    
    app.get("/profile", users.profile);

    app.use('/api/users', router);
};