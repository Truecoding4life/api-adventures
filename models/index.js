const User = require('./user');
const Resource = require('./resource');
const Project = require('./project');
const Category = require('./category');


// Relationship between User and Resource
User.hasMany(Resource, {
  foreignKey: 'user_id',
});
Resource.belongsTo(User, {
  foreignKey: 'user_id',
});


// Relationship between Resource and Category
Resource.hasOne(Category, {
  foreignKey: 'category_id',
});

Category.belongsTo(Resource, {
  foreignKey: 'category_id',
});

// Relationship between Resource and Project
Resource.belongsToMany(Project, {
  foreignKey: 'project_id',
  through: 'resource_project'
});
Project.belongsToMany(Resource, {
  foreignKey: 'resource_id',
  through: 'resource_project'
});

User.hasOne(Project, {
  foreignKey: 'user_id',
});
Project.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project, Resource, Category };
