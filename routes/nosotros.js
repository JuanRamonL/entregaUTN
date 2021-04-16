const { Router} = require('express');
const router = new Router();
const{

    getNosotros
} = require('../controllers/nosotros.controllers');

router.get('/', getNosotros)

module.exports = router;