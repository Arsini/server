const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination(req, file, cb) {
        const mimetypeArr = file.mimetype.split('/')
        const folderName = mimetypeArr[0]
        cb(null, `uploads/${folderName}`)
    },
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })
const { del, getFiles, upload: uploadFn, download } = require(`${appG.RP}/controller/pan`)

router.get('/delete', del)
router.get('/download', download)
router.get('/getFiles', getFiles)
router.post('/upload', upload.single('file'), uploadFn)

module.exports = router