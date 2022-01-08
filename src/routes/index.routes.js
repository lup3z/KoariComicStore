const express = require('express'); 
const router = express.Router();


router.use('/', require('./main.routes'))
router.use('/user', require('./user.routes'));
router.use('/product', require('./product.routes'))
router.use('/', require('./api'))

module.exports = router; 