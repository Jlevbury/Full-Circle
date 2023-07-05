const router = require('express').Router();
const { Features } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newFeatures = await Features.create({
        ...req.body,
        character_id: req.body.character_id
      });
      res.status(200).json(newFeatures);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const featureData = await Features.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!featureData) {
        res.status(404).json({ message: 'No feature found with this id!' });
        return;
      }
      res.status(200).json(Features);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
