const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const {createTokens, validateToken} = require('../JWT/JWT');

// Retrieve all Tutorials from the database.
exports.register = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    bcrypt.hash(password, 10).then((hash) => {
        User.create({
            username: username,
            password: hash,
            email: email, 
            role: "user"
        }).then(() => {
            res.json("Successfull registration!");
        }).catch((err) => {
            if(err) {
                res.status(400).json({error: err});
            }
        });
    });
};


exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;


  const user = await User.findOne({where: {username: username}});

  if(!user) {
      res.status(400).json({error: "User doesn't exist"});
  }
  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
      if(!match) {
          res.status(400).json({error: "Wrong username or password"});
      } else { 

        const accessToken = createTokens(user);
        res.cookie("access-token", accessToken, {
            maxAge: 60*60*24*30*1000,
            httpOnly: true,
        });
          res.json(username);
      }
  });
};

exports.logout = (req, res) => {
    res.cookie("access-token", {expires: Date.now()});
}

exports.profile = (req, res) => {
    if(req.authenticated && req.id) {
        User.findOne({where: {id: req.id } }).then(data => {
            res.send(data);
        }) 
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
    }
};


exports.findById = (req, res) => {
   const id = req.params.id;
   User.findOne({where: {id: id}})
   .then(data => {
       res.send(data);
   });
};