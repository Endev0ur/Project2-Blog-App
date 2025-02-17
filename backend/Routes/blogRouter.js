const {createBlog , getAllBlog} = require('../Controller/CRUDblogs');
const authMiddleware = require("../Middlewares/authMiddleware")

const router = require('express').Router();

router.get("/" , getAllBlog);
router.post("/create" , authMiddleware , createBlog);




module.exports = router;