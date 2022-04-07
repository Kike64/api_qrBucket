var express = require('express');
var referenciaController = require('../controllers/referenciaController');
var router = express.Router();


router.get('/referencia', referenciaController.getURL);

module.exports = router;