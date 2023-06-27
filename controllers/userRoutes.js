const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => res.render('index'));

router.get('/logout', (req, res) => res.render('index'));

//Register Page
router.get('/register', (req, res) => res.render('register'));

//Register Hanndle
router.post('/register', (req, res) => {
   const {name, email, password} = req.body;
   let errors = [];

   // Check required fields
   if(!name || !email || !password) {
        errors.push({ msg: 'Please fill in all fields' })
    }

    // Check password length
    if(password.length<6) {
        errors.push({ msg: 'Password should be at least 6 characters'})
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password
        })
    } else {
        User.findOne({ where: {email: email}})
            .then(user => {
                if(user) {
                    // User Exists
                    errors.push({ msg: 'Email is already registered' })
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password
                })
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });
                console.log(newUser)
                res.send('hello')
            }
        });  
    }
})

module.exports = router;