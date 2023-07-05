const router = require('express').Router();
const equipmentRoutes = require('./equipmentRoutes');
const characterRoutes = require('./characterRoutes');
const spellRoutes = require('./spellRoutes');

router.use('/equipment', equipmentRoutes);
router.use('/characters', characterRoutes);
router.use('/spell', spellRoutes);


module.exports = router;