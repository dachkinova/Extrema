
const {createTokens, validateToken} = require('../JWT/JWT');

module.exports = app => {
    const orders = require('../controller/orders.controller');
    var router = require('express').Router();

    router.post("/makeOrder", validateToken, orders.makeOrder);

    app.use('/api/order', router);
};