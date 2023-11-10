const router = require('express').Router();
const project = require('./project-routes');
const resource = require('./resource-routes');
const backEndRoutes = require('./login-routes');

router.use('/', backEndRoutes);
router.use('/project', project);
router.use('/resource', resource);
 

module.exports = router;

