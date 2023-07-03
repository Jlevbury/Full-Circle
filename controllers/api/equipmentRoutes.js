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
  
  router.delete('/:id', async (req, res) => {
    try {
      const equipmentData = await Equipment.destroy({
        where: {
          id: req.params.id,
        },
      });
      console.log(equipmentData)
      if (!equipmentData) {
        res.status(404).json({ message: 'No item found with this id!' });
        return;
      }
      res.status(200).json(equipmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
