const { Router } = require('express');
const router = new Router();
const {
    getContact,
    sendComment
} = require('../controllers/contact.controllers');


router.get('/', getContact);
router.post('/', sendComment); // el errror esta aca!, ver mañana

module.exports = router;