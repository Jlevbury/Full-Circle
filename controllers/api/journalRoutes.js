const router = require('express').Router();
const { Journal } = require('../../models');

// This adds journal entries

router.post('/', async (req, res) => {
    try {
      const newJournal = await Journal.create({
        ...req.body,
        character_id: req.body.character_id
      });
      res.status(200).json(newJournal);
    } catch (err) {
      res.status(400).json(err);
    }
});

// This deletes journal entries

router.delete('/:id', async (req, res) => {
  try {
    const journalData = await Journal.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!journalData) {
      res.status(404).json({ message: 'No entry found with this id!' });
      return;
    }
    res.status(200).json(journalData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
