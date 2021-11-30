const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/users-images"));

    },

    
    
    filename: (req, file, cb) => {
        let imageName = "usuario-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    },

    
});

/* let uploadFilter = function fileFilter(req, file, cb){
    console.log(file.mimetype);
    if(file.mimetype == "image/jpeg"){
        cb(null, false)
    }
    cb(null, true)
} */




let fileUpload = multer ({ storage });

module.exports = fileUpload