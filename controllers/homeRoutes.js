const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => {
    res.render('homepage', { title: 'homepage', bgImage: '/public/assets/img/mountains__2_.png' })
});


// Dashboard

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

module.exports = router;