const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//POST /auth/signup
router.post('/signup', (req, res) => {
  res.send("hit the signup route");
});

//POST /auth/login
router.post('/login', (req, res) => {
  res.send("hit the login route");
});

//POST /auth/me/from/token 
router.post('/me/from/token', (req, res) => {
  res.send("hit the verification route");
});

module.exports = router;