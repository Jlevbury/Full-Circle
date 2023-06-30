const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => {
    res.render('monsters', { title: 'monsters', bgImage: '/assets/img/other__16_.png' })
});


/* Dashboard

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard')
});*/


module.exports = router;