const { body } = require('express-validator');

const userLoginValidation = [
    body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    	.isEmail().withMessage('Debes escribir un formato de correo válido')
		.isLength({ min: 8 }).withMessage('El email debe ser más largo'),
    
	body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña').bail()
		.isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
]

module.exports = userLoginValidation;