const Base = require('./Base')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
function Upload(){
    Base.bind(this)
    this.rename = function(files){
        for(const val of files) {
            const { path, originalname, destination } = val;
            this.fs.rename(path, destination + originalname, function(err){
                if(err){
                    throw err;
                }
                console.log('done!');
            })
        }
    }
    this.router.post('/', upload.array('files', 12), (req, res, next) => {
        this.rename(req.files)
        res.send({ret_code: '0'});
    })
}
Upload.prototype = new Base()
Upload.prototype.constructor = Upload
const _upload = new Upload()
module.exports = _upload.router