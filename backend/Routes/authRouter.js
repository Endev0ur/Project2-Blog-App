const { signup, login , getUser , getAllUser} = require('../Controller/authController');

const router = require('express').Router();


router.post('/signup' , signup);
router.post('/login' , login);

router.get("/getuser/:name" , getUser)
router.get("/getallusers" , getAllUser);


module.exports = router;