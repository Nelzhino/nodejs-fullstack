const router = require('express').Router();
const { TechnologyController } = require('../controller');

router.get('/api/technologies', TechnologyController.getTechnologies);
router.get('/api/technology/:id', TechnologyController.getTechnologyById);
router.get('/api/technology/search/:name', TechnologyController.getTechnologyByName);


module.exports = router;