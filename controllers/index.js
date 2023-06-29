const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const characterRoutes = require('./characterRoutes');
const userRoutes = require('./userRoutes')
const monsterRoutes = require('./monsters')
 
// Welcome Page
router.get('/', (req, res) => {
    res.render('homepage', { title: 'homepage', bgImage: '/public/assets/img/mountains__2_.png' })
});


// Dashboard

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard')
});

router.use('/characters', characterRoutes);
router.use('/users', userRoutes);
router.use('/monsters', monsterRoutes)

module.exports = router;
