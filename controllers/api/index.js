const router = require('express').Router();
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
userRoutes = require('./user-routes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes); 

module.exports = router;

