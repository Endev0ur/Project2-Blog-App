const {createBlog , getAllBlog , deleteBlog , updateBlog} = require('../Controller/CRUDblogs');
const authMiddleware = require("../Middlewares/authMiddleware");

const router = require('express').Router();

router.get("/" , getAllBlog);
router.post("/create" , authMiddleware , createBlog);
router.delete("/delete/:id" , deleteBlog);
router.put("/update/:id" , updateBlog);



module.exports = router;