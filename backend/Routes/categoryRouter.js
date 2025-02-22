const {getAllCategory , createCategory , deleteCategory } = require("../Controller/CategoryController");

const router = require("express").Router();

router.get("/" , getAllCategory);
router.post("/create" , createCategory);
router.delete("/delete " , deleteCategory);


module.exports = router;