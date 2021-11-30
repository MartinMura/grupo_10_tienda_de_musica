const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
    cb(null, path.join(__dirname, "../public/images/images-productos"));

    },
    filename: (req, file, cb) => {
        let imageName = "producto-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName)
    }
});

let fileUpload = multer({ storage })

module.exports = fileUpload