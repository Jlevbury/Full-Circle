const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// This loads the monster page

router.get('/', (req, res) => {
    res.render('monsters', { title: 'monsters', bgImage: '/assets/img/other__16_.png' })
});


module.exports = router;
