const express = require('express');
const router = express.Router();
const {handleUpdate} = require('../controllers/user');


router.post('/',handleUpdate);

module.exports = router;