const express = require('express');
const routes = express.Router();
const apiUserss = require('../controllers/apiUsers');
console.log('----')
console.log(apiUserss)


routes.get('/users', apiUserss.allUsers);

module.exports = routes; 