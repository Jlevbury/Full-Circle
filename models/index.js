const User = require('./User');
const Character = require('./Character');
const Equipment = require('./Equipment');
const Spellbook = require('./Spellbook');
const Features = require('./Features')


User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

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

Character.hasMany(Features, {
  foreignKey: 'character_id'
});

Features.belongsTo(Character, {
  foreignKey: 'character_id'
});

module.exports = { User, Character, Equipment, Spellbook, Features };