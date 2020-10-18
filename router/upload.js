const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })
const progressStream = require('progress-stream');
router.post('/', (req, res, next) => {
    const progress = progressStream({ length: '0', time: 500 });
    req.pipe(progress)
    progress.headers = req.headers;
    // progress.on('length', function nowIKnowMyLength (actualLength) {
    // 	console.log('actualLength: %s', actualLength);
    // 	progress.setLength(actualLength);
    // });
    progress.on('progress', function (obj) {		
    	console.log('progress: %s', obj.percentage);
    });
    upload.array('file', 99)(progress, res, next);
    res.end('end');
})
module.exports = router