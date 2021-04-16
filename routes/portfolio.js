const { Router} = require('express');
const router = new Router();
const{

    getPortfolio
} = require('../controllers/portfolio.controllers')

router.get('/', getPortfolio)

module.exports = router;