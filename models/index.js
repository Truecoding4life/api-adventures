const User = require('./user');
const Resource = require('./resouce');
const Project = require('./project');

User.hasMany(Resource, {
  foreignKey: 'user_id',
});
Resource.belongsTo(User, {
  foreignKey: 'user_id',
});

Resource.hasMany(Project, {
  foreignKey: 'user_id', 
  through: 'resource_project'
});
Project.hasMany(Resource, {
  foreignKey: 'user_id',
  through: 'resource_project'
});

User.hasOne(Project, {
  foreignKey: 'user_id',
});
Project.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project, Resource };
