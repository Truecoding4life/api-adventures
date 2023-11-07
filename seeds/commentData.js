const { Comment } = require('../models');

const commentdata = [
// add comments
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
