const router = require('express').Router();
const equipmentRoutes = require('./equipmentRoutes')
const characterRoutes = require('./characterRoutes')

router.use('/equipment', equipmentRoutes);
router.use('/characters', characterRoutes)


module.exports = router;