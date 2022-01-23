const express = require('express'); 
const router = express.Router(); 
const maincontroller = require('../controllers/mainController');
const productController = require('../controllers/productController')
const multer = require('multer');
const path = require('path');
const productCreateValidationMiddleware = require ("../middlewares/productCreateValidationMiddleware")

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if(req.body.description){
			cb(null, './public/img')
		}else{
			cb(null, './public/img')
		}
		},
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName)
    }
})
const upload = multer({ storage: storage })



router.get('/productList', productController.productList);
router.get('/createProduct', productController.getCreateProduct);
router.post('/createProduct', upload.single("imagen"), productCreateValidationMiddleware, productController.createProduct);
router.get('/productDetail/:id', productController.productDetail);
router.get('/editProduct/:id', productController.getProductToEdit);
router.put('/:id', upload.single('producto'), productController.editProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router