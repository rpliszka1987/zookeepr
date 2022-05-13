const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeepersRoutes = require('./zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeepersRoutes);

module.exports = router;