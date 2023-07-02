const router = require('express').Router();
const { Equipment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newEquipment = await Equipment.create({
        ...req.body,
        character_id: req.body.character_id
      });
      res.status(200).json(newEquipment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
