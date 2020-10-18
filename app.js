const global = require(`${__dirname}/app_global`)//设置全局属性
const express = require('express')
const bodyParser = require('body-parser');//解析,用req.body获取post参数
const app = express()
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({extended: false}))
const port = appG.config.port
const user = require(`${appG.RP}/router/user`)
const { getIPAddress } = require('./utils')
app.use('/user', user)
app.use(express.static('./www'))
app.listen(port, () => {
    console.log(`listening at http://localhost:${ port }`)
    console.log(`listening at http://${ getIPAddress() }:${port}`)
})