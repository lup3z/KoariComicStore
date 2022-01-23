const { body } = require('express-validator');
const path = require('path');

const uservalidation = [
    body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
    	.isEmail().withMessage('Debes escribir un formato de correo válido')
		.isLength({ min: 8 }).withMessage('El email debe ser más largo'),

    body('nombre')
		.notEmpty().withMessage('Tienes que escribir un nombre').bail()
		.isLength({ min: 3 }).withMessage('El nombre debe ser más largo'),

	body('apellido')
		.notEmpty().withMessage('Tienes que escribir un apellido').bail()
		.isLength({ min: 3 }).withMessage('El apellido debe ser más largo'),
    
	body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña').bail()
		.isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'),

	body('dni')
		.notEmpty().withMessage('Tienes que escribir un DNI').bail()
		.isLength({ min: 6 }).withMessage('El DNI debe ser más largo'),

    body('avatar')
		.custom((value, { req }) => {
			let file = req.file;
			let acceptedExtensions = ['.jpg', '.png', '.gif'];
			if (!file) {
				throw new Error('Tienes que subir una imagen');
			} else {
				let fileExtension = path.extname(file.originalname);
				if (!acceptedExtensions.includes(fileExtension)) {
					throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
				}
			}
			return true;
		})
]

module.exports = uservalidation;