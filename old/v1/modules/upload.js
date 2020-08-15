const multer = require('multer');//接收图片
const upload = multer({ dest: 'uploads' });//定义图片上传的临时目录

module.exports = (app, fs, path, broadcast) =>{
	// 单域多文件上传：input[file]的 multiple=="multiple"
	app.post('/uploads', upload.array('file', 99), function(req, res, next) {
		console.log(req.files)
	    // req.files 是 前端表单name=="imageFile" 的多个文件信息（数组）,限制数量99，应该打印看一下
	    for (var i = 0; i < req.files.length; i++) {
	        // 图片会放在uploads目录并且没有后缀，需要自己转存，用到fs模块
	        // 对临时文件转存，fs.rename(oldPath, newPath,callback);
	        fs.rename(req.files[i].path, path.join('uploads', req.files[i].originalname), err => {
	            if (err) {
	                throw err;
	            }
	        })
	        global.historyMsg.push({file: req.files[i].originalname})
	        const obj = {
	        	data: {
	        		file: req.files[i].originalname,
	        	},
	        	functionName: 'sendMsg',
	        }
	        broadcast(JSON.stringify(obj))
	    }
	    res.writeHead(200, {
	        "Access-Control-Allow-Origin": "*"//允许跨域。。。
	    });
	    res.end();
	})
}