const { signup, login , getUser } = require('../Controller/authController');

const router = require('express').Router();


router.post('/signup' , signup);
router.post('/login' , login);

router.get("/getuser/:name" , getUser)


module.exports = router;