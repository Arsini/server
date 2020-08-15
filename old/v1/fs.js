var fs = require("fs");

// 创建可读流
var readerStream = fs.createReadStream('D:/Adobe Photoshop CC 2018.zip');
var writerStream = fs.createWriteStream('2018.zip');
let i = 0;
console.log(readerStream.length)
// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log(i)
    i++
});

// readerStream.on('end',function(){
//     writerStream.end();
//     console.log("复制完毕");
// });

// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });

readerStream.pipe(writerStream);

