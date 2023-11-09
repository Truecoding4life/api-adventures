const router = require('express').Router();


const apiRoutes = require('./api/index.js')
const homeRoutes = require('./client-routes')

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
