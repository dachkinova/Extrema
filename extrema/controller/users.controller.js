const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;
const bycrypt = require('bcrypt');

// Retrieve all Tutorials from the database.
exports.register = (req, res) => {
    const {username, password, email} = req.body;
    bycrypt.hash(password, 10).then((hash) => {
        User.create({
            username: username,
            password: hash,
            email: email
        }).then(() => {
            res.json("Successfull registration!");
        }).catch((err) => {
            if(err) {
                res.status(400).json({error: err});
            }
        });
    });
};

exports.login = (req, res) => {

};

exports.profile = (req, res) => {

};