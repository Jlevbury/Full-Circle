const router = require('express').Router();
const { Character } = require('../../models');
 
// This code deletes characters

router.delete('/:id', async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!characterData) {
      res.status(404).json({ message: 'No character found with this id!' });
      return;
    }
    res.status(200).json(characterData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;