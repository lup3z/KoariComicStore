const multer = require("multer");
const path = require ("path")

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../../public/img'));
		},
        filename: function (req, file, cb) {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName)
    }
})

const upload = multer({ storage: storage })

module.exports = upload;