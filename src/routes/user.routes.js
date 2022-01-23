const express = require('express'); 
const router = express.Router();
const userController = require ('../controllers/userController');
const uservalidation = require ("../middlewares/registerValidationsMiddleware")
const userLoginValidation = require ("../middlewares/loginValidationsMiddleware")
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require ("../middlewares/userMulterMiddleware")

router.get('/register', guestMiddleware, userController.register);
router.post('/register', upload.single('avatar'), uservalidation, userController.newUserRegister);
router.get('/login', guestMiddleware, userController.login);
router.post('/login', userLoginValidation, userController.loginProcess);
router.get('/profile', authMiddleware, userController.profile);
router.get('/logout', userController.logout);

module.exports = router