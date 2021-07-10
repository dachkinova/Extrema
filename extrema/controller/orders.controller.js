const db = require('../models');
const Order = db.orders;
const User = db.users;
exports.makeOrder = (req, res) => {

    let fullNameInput = req.body.enteredFullName;
    let user_id = req.id;
    let productName = req.body.adventure[0].title;
    let quantity = req.body.adventure[0].amount;
    let emailInput = req.body.enteredEmail;
    let addressInput = req.body.enteredAddress;
    let cityInput = req.body.enteredCity;


        Order.create({
            user_id: user_id,
            product_name: productName,
            quantity: quantity,
            full_name: fullNameInput,
            email: emailInput,
            address: addressInput,
            city: cityInput

        }).then((res) => {
            res.json("Successfull order!");
        }).catch((err) => {
            if(err) {
                console.log(res);
                res.status(400).json({error: err});
            }
        });
};