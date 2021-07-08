const db = require('../models');
const Review = db.reviews;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');

exports.review = (req, res) => {

    let contentInput = req.body.content;
    let nameInput = req.body.name;
    let emailInput = req.body.email;

        Review.create({
            content: contentInput,
            name: nameInput,
            email: emailInput
        }).then((res) => {
            
            res.json("Successfull review added!");
        }).catch((err) => {
            if(err) {
                console.log(res);
                res.status(400).json({error: err});
            }
        });
};