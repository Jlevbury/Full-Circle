const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('homepage',
    { title: 'homepage', bgImage: '/public/assets/img/mountains__2_.png' })
});


// Dashboard

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

// Login

router.get('/login', (req, res) => {
    const {email, password} = req.body;
    let errors = [];
    res.render('homepage',
    { bgImage: '/public/assets/img/other__11_.png',
    email,
    password });
});

router.post('/login', (req, res, next) => {
    console.log(req)
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})


module.exports = router;