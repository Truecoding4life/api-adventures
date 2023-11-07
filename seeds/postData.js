const { Post } = require('../models');

const data = [
  // add posts
];

const seedPost = () => Post.bulkCreate(data);

module.exports = seedPost;
