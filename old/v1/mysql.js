const mysql = require('mysql');
//createConnection(哪台服务器，端口（默认3308）， 用户名， 密码， 库)
const db = mysql.createConnection({
    host: '13.250.14.75',
    //port: 3308,
    user: 'root',
    password: '3323221',
    database: 'arsin',
})
db.query('SELECT * FROM `user_table`;',(err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})