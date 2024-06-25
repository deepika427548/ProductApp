const { addProduct, getAllProduct, getById, deleteProduct, updateProduct } = require("../controller/productController");
const asyncHandler = require("../utils/asyncHandler");

const router=require("express").Router();

router.get('/',asyncHandler(getAllProduct));
router.get('/:id',asyncHandler(getById));
router.post("/",asyncHandler(addProduct));
router.put('/:id',asyncHandler(updateProduct));
router.delete('/:id',asyncHandler(deleteProduct));






module.exports=router;

