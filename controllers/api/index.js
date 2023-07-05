const router = require('express').Router();
const equipmentRoutes = require('./equipmentRoutes');
const characterRoutes = require('./characterRoutes');
const spellRoutes = require('./spellRoutes');
const featureRoutes = require('./featureRoutes');
const journalRoutes = require('./journalRoutes');

router.use('/equipment', equipmentRoutes);
router.use('/characters', characterRoutes);
router.use('/spell', spellRoutes);
router.use('/features', featureRoutes);
router.use('/journal', journalRoutes);

module.exports = router;