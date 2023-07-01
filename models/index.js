const User = require('./User');
const Character = require('./Character');
const Ideals = require('./Ideals')

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

// has many attacks, traits, equipment,


Ideals.belongsTo(Character, {
  foreignKey: 'character_id'
})
module.exports = { User, Character };
