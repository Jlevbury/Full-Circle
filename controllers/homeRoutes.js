const express = require('express');
const router = express.Router();


// This loads the main page
router.get('/', (req, res) => {
    res.render('index',
    { title: 'homepage',
    bgImage: '/assets/img/indexbg.png',
    logged_in: req.isAuthenticated(),
})
});

module.exports = router;