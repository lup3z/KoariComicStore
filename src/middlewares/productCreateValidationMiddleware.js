const { body } = require('express-validator');
const path = require('path');

const productCreateValidationMiddleware = [
    body('nombre')
		.notEmpty().withMessage('Tienes que detallar un nombre para el producto').bail()
		.isLength({ min: 5 }).withMessage('El nombre del producto debe ser más largo'),

    body('descripcion')
		.notEmpty().withMessage('Tienes que incorporar una descripción del producto').bail()
		.isLength({ min: 8 }).withMessage('La descripción debe ser más larga'),

	body('volumen')
		.notEmpty().withMessage('Tienes que detallar a qué volumen pertenece').bail()
		.isLength({ min: 3 }).withMessage('El volumen debe ser más largo'),
    
	body('autor')
		.notEmpty().withMessage('Tienes que detallar el nombre del autor').bail()
		.isLength({ min: 8 }).withMessage('El nombre del autor debe ser más largo'),

	body('artista')
		.notEmpty().withMessage('Tienes que detallar el nombre del artista').bail()
		.isLength({ min: 8 }).withMessage('El nombre del artista debe ser más largo'),

    body('editorial')
		.notEmpty().withMessage('Tienes que detallar el nombre de la editorial').bail()
		.isLength({ min: 5 }).withMessage('El nombre de la editorial debe ser más largo'),

    body('qDePaginas')
		.notEmpty().withMessage('Tienes que indicar la cantidad de páginas').bail()
		.isNumeric(),

    body('colorObyn')
		.notEmpty().withMessage('Tienes que indicar si el producto es a color o blanco & negro').bail()
		.isLength({ min: 4 }).withMessage('La información sobre la tinta del producto debe ser más larga'),

    body('edicion')
		.notEmpty().withMessage('Tienes que detallar el nombre de la edición').bail()
		.isLength({ min: 5 }).withMessage('El nombre de la edición debe ser más largo'),

    body('precio')
		.notEmpty().withMessage('Tienes que indicar el precio').bail()
		.isNumeric(),

    body('imagen').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif', '.png'];
            
            if (!file) {
                throw new Error('Tienes que subir una imagen');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                };
            }
    
            return true;
        }),
]

module.exports = productCreateValidationMiddleware;