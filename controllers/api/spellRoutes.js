const router = require('express').Router();
const { Spellbook } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newSpell = await Spellbook.create({
        ...req.body,
        character_id: req.body.character_id
      });
      res.status(200).json(newSpell);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const spellbookData = await Spellbook.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!spellbookData) {
        res.status(404).json({ message: 'No spell found with this id!' });
        return;
      }
      res.status(200).json(spellbookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
