const User = require('./User');
const Character = require('./Character');
const Ideals = require('./Ideals');
const Equipment = require('./Equipment');
const Spellbook = require('./Spellbook');


User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

Character.hasMany(Ideals, {
  foreignKey: 'character_id'
})

Ideals.belongsTo(Character, {
  foreignKey: 'character_id'
})


Character.hasMany(Equipment, {
  foreignKey: 'character_id'
});

Equipment.belongsTo(Character, {
  foreignKey: 'character_id'
});

Character.hasMany(Spellbook, {
  foreignKey: 'character_id'
});

Spellbook.belongsTo(Character, {
  foreignKey: 'character_id'
});

module.exports = { User, Character, Equipment, Spellbook };