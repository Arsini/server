const global = require(`${__dirname}/app_global`)
const express = require('express')
const bodyParser = require('body-parser');//解析,用req.body获取post参数
const app = express()
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({extended: false}))
const port = appG.config.port
const user = require(`${appG.RP}/router/user`)

app.use('/user', user)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})