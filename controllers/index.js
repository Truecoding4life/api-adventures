const router = require('express').Router();

// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');
const apiRoutes = require('./api/index.js')
const homeRoutes = require('./home-routes')

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
// router.use('/home');

module.exports = router;
