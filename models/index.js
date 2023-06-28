const User = require('./User');
const Character = require('./Character');
const Stats = require('./Stats')

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

Character.hasOne(Stats, {
  foreignKey: 'character_id'
})
Stats.belongsTo(Character, {
  foreignKey: 'character_id'
})
module.exports = { User, Character };
