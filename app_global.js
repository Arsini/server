const config = require(`${__dirname}/config/config.default`)
const db = require(`${__dirname}/models/index.js`)
global.appG = {
    db,
    config,
    RP: __dirname, //root path 根目录
}