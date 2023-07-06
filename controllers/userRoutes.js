const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const passport = require('passport')


//Register Page
router.get('/register', (req, res) => res.render('login'));

//Register Handle
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
                
                // Hash password
            bcrypt.genSalt(10, (err, salt) =>
                bcrypt.hash(newUser.password, salt, (error, hash) =>{
                    if(err) throw err;
                    // Set password to hashed
                    newUser.password = hash;
                    // Save user
                    newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can log in');
                            res.redirect('/users/login')
                        })
                        .catch(err => console.log(err));
            }))
        }
    });  
    }
});

// Login Handle

router.get('/login', (req, res) => {
    const {email, password} = req.body;
    let errors = [];
    res.render('login',
        { bgImage: '/assets/img/other__11_.png',
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

// Logout Handle

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      console.log('Logged out')
      req.flash('success', "Goodbye!");
      res.redirect('/users/login');
    });
  });

module.exports = router;