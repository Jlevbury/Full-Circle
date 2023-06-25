const router = require('express').Router();
// const BlogPost = require('../models/BlogPost');
// const User = require('../models/User');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {

    console.log('hi')
    res.send('index');
    
    })