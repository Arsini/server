
module.exports = (app, fs, path) =>{
	app.get('/video', function(req, res, next) {
		console.log(req.query.filename)
		res.writeHead(200, {'Content-Type': 'video/mp4'});  
		var rs = fs.createReadStream('./top.mp4');  
		rs.pipe(res);  
		rs.on('end',function(){  
			res.end();  
		}); 
	})
}