const db = require('../models');
const Order = db.orders;
const User = db.users;
exports.makeOrder = (req, res) => {

    let fullNameInput = req.body.enteredFullName;
    let user_id = req.id;
    let emailInput = req.body.enteredEmail;
    let addressInput = req.body.enteredAddress;
    let cityInput = req.body.enteredCity;
    let productName = [];
    for (let i = 0; i < req.body.adventure.length; i++) {
        // productName.concat(req.body.adventure[i].title)
        // if (req.body.adventure[i].length !== 1) {
        // productName.concat(",");
        productName.push(req.body.adventure[i].title);

    }
    let quantity = 1;

    Order.create({
        user_id: user_id,
        product_name: productName,
        quantity: quantity,
        full_name: fullNameInput,
        email: emailInput,
        address: addressInput,
        city: cityInput

    }).then(() => {
        res.json({msg: "Successfull order!"});
    }).catch(() => {
        if (err) {
            console.log(res);
            res.status(400).json({ error: err });
        }
    });
};