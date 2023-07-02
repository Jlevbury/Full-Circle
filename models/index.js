const User = require('./User');
const Character = require('./Character');
const Ideals = require('./Ideals');
const Equipment = require('./Equipment');

// Character.associate = function(models) {
//   Character.hasMany(models.Equipment);
// };

// Equipment.associate = function(models) {
//   Equipment.belongsTo(models.Character);
// };


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


Character.hasMany(Equipment, {
  foreignKey: 'character_id'
});

Equipment.belongsTo(Character, {
  foreignKey: 'character_id'
});

module.exports = { User, Character, Equipment };