const router = require('express').Router();
const backEndRoutes = require('./Backend-routes');

router.use('/', backEndRoutes);

 

module.exports = router;

