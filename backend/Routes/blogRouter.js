const {createBlog} = require('../Controller/CRUDblogs');

const router = require('express').Router();

router.post("/create" , createBlog);




module.exports = router;