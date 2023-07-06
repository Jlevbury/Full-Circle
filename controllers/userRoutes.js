const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const passport = require('passport')


//Register Page
router.get('/register', (req, res) => res.render('login'));

//Register Handle
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    let errors = [];
  
    // Check required fields
    if (!name || !email || !password) {
      errors.push({ msg: 'Please fill in all fields' });
    }
  
    // Check password length
    if (password.length < 6) {
      errors.push({ msg: 'Password should be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      return res.render('register', {
        errors,
        name,
        email,
        password
      });
    }
  
    try {
      const user = await User.findOne({ where: { email: email } });
  
      if (user) {
        // User exists
        errors.push({ msg: 'Email is already registered' });
        return res.render('register', {
          errors,
          name,
          email,
          password
        });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
  
      const newUser = await User.create({
        name,
        email,
        password: hash
      });
  
      req.login(newUser, (err) => {
        if (err) {
          console.error(err);
          return res.redirect('/users/login');
        }
  
        res.redirect('/'); // Redirect to the desired page after successful login
      });
    } catch (err) {
      console.error(err);
      res.redirect('/users/login');
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
    passport.authenticate('local', {
        successRedirect: '/characters',
        failureRedirect: '/users/login',
        failureFlash: true
    })
    (req, res, next)
})

// Logout Handle

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success', "Goodbye!");
      req.session.destroy();
      res.redirect('/');
    });
  });

module.exports = router;