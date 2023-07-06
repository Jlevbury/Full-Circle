const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated } = require("../config/auth");

// This loads the main page
router.get('/', (req, res) => {
    res.render('index',
    { title: 'homepage',
    bgImage: '/assets/img/indexbg.png',
    logged_in: req.isAuthenticated(),
})
});

// Login

router.get('/login', (req, res) => {
    const {email, password} = req.body;
    let errors = [];
    res.render('login',
    { bgImage: '/assets/img/other__11_.png',
    email,
    password });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })
    (req, res, next)
})

// Logout

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.session.destroy();
      res.redirect('/');
    });
  });

module.exports = router;