const express = require('express');
const router = express.Router();
const {handleUserSignUp,handleUserSignIn} = require('../controllers/user');


router.post('/register',handleUserSignUp);
router.post('/login',handleUserSignIn);

module.exports = router;