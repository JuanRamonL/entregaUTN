const { Router} = require('express')
const router = new Router();
const {
  
     getIndex 
} = require('../controllers/index.controllers');

router.get( '/', getIndex);

module.exports= router;