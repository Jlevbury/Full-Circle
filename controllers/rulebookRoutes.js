const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => {
    res.render('rulebook', { title: 'rulebook', bgImage: '/public/assets/img/other__16_.png' })
});

/* Dashboard

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard')
});*/


module.exports = router;
