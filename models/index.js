const User = require('./user');
const Post = require('./resouce');
const Comment = require('./Comment');
// What else do we need?
// Add user has many ?
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
