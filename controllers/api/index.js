const router = require('express').Router();
const project = require('./project-routes');
const resource = require('./resource-routes');
const login = require('./login-routes');

router.use('/', login);
router.use('/project', project);
router.use('/resource', resource);
 

module.exports = router;

