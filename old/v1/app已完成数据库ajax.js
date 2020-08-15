const express = require('express')
const app = express()
var bodyParser = require('body-parser') //接受post、get请求
var mysql = require('mysql') //数据库

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123qwe',
	database: 'mydb'
});

//创建一个connection
connection.connect(function(err) {
	if (err) {
		console.log('[query] - :' + err);
		return;
	}
	console.log('[connection connect]  succeed!');
});

var sql = 
"select * from user where pass like '%asd%'"
// "INSERT INTO `test` (`name`, `age`) VALUES ('appll', '244')"
// "DELETE FROM `test` WHERE (`name`='100元秒杀家教机') AND (`age`='100') LIMIT 1"
// 'insert into test(name,age) values(?,?)'; //增
// 'SELECT * FROM test'; //查整个表
// var param = ['10教机',99];



// //关闭connection
// connection.end(function(err){
//     if(err){       
//         return;
//     }
//     console.log('[connection end] succeed!');
// });


app.use(bodyParser.urlencoded({ // bodyParser使用
	extended: true
}));

app.use(express.static('public')) // 访问静态文件 如果放在路由之前 则使用 index.html

/*********** 路由 ***********/
// 对网站首页的访问返回 "Hello World!" 字样
// app.get('/', function(req, res) {
// 	res.send('Hello World123!');
// });

// // 网站首页接受 POST 请求
// app.post('/', function(req, res) {
// 	res.send('Got a POST request');
// });

// // user 节点接受 PUT 请求
// app.put('/user', function(req, res) {
// 	res.send('Got a PUT request at /user');
// });

// // user 节点接受 DELETE 请求
// app.delete('/user', function(req, res) {
// 	res.send('Got a DELETE request at /user');
// });

// all 代替上面所有请求方式
// app.all('/', function(req, res) {
// 	res.send('Hello World123!');
// 	next()
// });

app.all('/ajax', function(req, res) {
	connection.query("select * from user where pass like '%asd%'", function (err,rows) {
		res.send(rows);
	})
});

app.all('/ajax1', function(req, res) {
	res.send({
		ajax: 'ajaxajaxajaxajax1111111111111111'
	});
});

/*********** 路由 END ***********/

app.use(function(req, res, next) { // 处理 404
	res.status(404).send('Sorry cant find that!');
});


app.listen(3000) //监听理由