const express = require('express')
const router = express.Router();
const {getProduct,Updateproducts,createproduct,deleteProduct} = require('../controllers/productController')

router.get('/products',getProduct);

router.put('/products/:id',Updateproducts);

router.put('/products/',createproduct)

router.put('/product/:id', deleteProduct);



module.exports = router