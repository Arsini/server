const { resSend, resSendErr } = appG.utils
const fs = require('fs')
const path = require("path")
const dirPath = appG.RP + '/uploads'
const getVideo = (req, res) => {
    const list = []
    const fullpath = path.join(dirPath, 'video')
    const readFiles = fs.readdirSync(fullpath)
    readFiles.map(fileName => {
        list.push({
            fileName,
        })
    })
    resSend(res, { list })
}

module.exports = {
    getVideo
}