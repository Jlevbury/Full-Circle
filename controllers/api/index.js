const router = require('express').Router();
const equipmentRoutes = require('./equipmentRoutes')

router.use('/equipment', equipmentRoutes);


module.exports = router;