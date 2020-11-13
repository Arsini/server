module.exports = (app, fs, path) => {
	//文件下载
	app.get('/download', function (req, res, next) {
	    var filePath = path.join(__dirname, '../');
	    var fileName = req.query.fileName
	    fs.readFile(filePath + "uploads/" + fileName, function(err, data){  
	        res.writeHead(200,{  
	            'Content-Type': 'application/octet-stream',  //告诉浏览器这是一个二进制文件  
	            'Content-Disposition': 'attachment; filename=' + encodeURI(fileName)  //告诉浏览器这是一个附件要下载是png图片  
	        });  
	        res.end(data)
	    })  
	});
}
