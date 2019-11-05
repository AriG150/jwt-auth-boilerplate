const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//POST /auth/signup
router.post('/signup', (req, res) => {
  //See if the email is already in the db 
  User.findOne({ email: req.body.email }, (err, user) => {
    //if yes, return error
    if (user) {
      res.json({
        type: 'error',
        message: 'Email already in database'
      })
    } else {
      //if no, create the user in the db 
      let user = new User(req.body);
      user.save((err, user) => {
        if(err) {
          res.json({
            type: 'error',
            message: 'Database error creating user',
            error: err
          })
        } else {
          //sign a token
          const token = jwt.sign(user.toObject(),process.env.JWT_SECRET, {
            expiresIn: '1d'
          });
          //return the token
          res.status(200).json({
            type: 'sucess', 
            user: user.toObject(),
            token
          })
        }
      })
    }
  })
});

//POST /auth/login
router.post('/login', (req, res) => {
  //Find user in db
    //if no user, return err 
    //if user, check auth 
      //if authenticated, sign a token 
      // return the token 
});

//POST /auth/me/from/token 
router.post('/me/from/token', (req, res) => {
  //request must contain a token
    //if not token, return error
    //if token, verify it
      //if errors during verification, return error (bad token)
      //if token is valid, use token to look up user in db 
        //if no user, return error
        //if user, return user and token to front 
});

module.exports = router;