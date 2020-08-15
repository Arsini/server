const path = require('path')
const fs = require("fs");//操作文件
const express = require('express')
const app = express()
const expressWs = require('express-ws')(app) //websocket插件
const broadcast = require('./modules/broadcast')(expressWs) //广播
global.historyMsg = [] //历史聊天内容

app.use(express.static('public')) // 访问静态文件 如果放在路由之前 则使用 index.html

require('./modules/socket')(app, fs, path, broadcast) // websocket
require('./modules/upload')(app, fs, path, broadcast) // 上传
require('./modules/download')(app, fs, path) // 下载
require('./modules/video')(app, fs, path)//视频

app.listen(3003) //监听理由

//supervisor