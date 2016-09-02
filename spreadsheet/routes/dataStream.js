var express = require('express');
var router = express.Router();
var dataController = require('../app/controllers/dataController');

router.get('/', dataController.fetchAll);
router.get('/:id', dataController.fetchData);
router.post('/', dataController.addData);
router.delete('/:id', dataController.deleteData);

module.exports = router;
