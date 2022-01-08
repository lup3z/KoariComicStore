const express = require('express');
const routes = express.Router();
const resultApiUser = require('../controllers/apiUsers');
const resultApiProduct = require('../controllers/apiProducts');

routes.get('/users', resultApiUser.allUsers);
routes.get('/users/:id', resultApiUser.getUser);
routes.get('/products', resultApiProduct.allProducts);
routes.get('/products/:id', resultApiProduct.getProduct);

module.exports = routes; 