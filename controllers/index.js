const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const characterRoutes = require('./characterRoutes');
const userRoutes = require('./userRoutes')
const monsterRoutes = require('./monsterRoutes')
const rulebookRoutes = require('./rulebookRoutes')
 const homeRoutes = require('./homeRoutes');
const { Character } = require('../models');
const apiRoutes = require('./api')
// Welcome Page



router.use('/characters', characterRoutes);
router.use('/users', userRoutes);
router.use('/monsters', monsterRoutes);
router.use('/rulebook', rulebookRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
module.exports = router;
