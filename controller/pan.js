const fsPromises = require('fs').promises
const fs = require('fs')
const mime = require('mime')
const dirPath = appG.RP + '/uploads'
const { resSend, resSendErr } = appG.utils
//获取文件信息
const getFilesData = () =>{
    const readDir = fs.readdirSync(dirPath);
    const fileList = []
    readDir.map(val => {
        const fileStat = fs.statSync(`${dirPath}/${val}`)
        const size = Math.floor(fileStat.size/1024)
        const getType = mime.getType(`${dirPath}/${val}`)
        const type = getType? mime.getExtension(getType) : '--'
        fileList.push({
            name: val,
            size,
            type,
        })
    })
    return fileList
}
const del = (req, res) => {
    const { fileName } = req.query
    //删除单个
    fsPromises.unlink(`${dirPath}/${fileName}`).then(() => {
        resSend(res, { list: getFilesData() })
    }, () => {
        resSendErr(res, 400, 'no such file')
    })
    //删除全部
    // const files = fs.readdirSync(dirPath)
    // files.forEach((file) => {
    //     let curPath = dirPath + "/" + file;
    //     fs.unlinkSync(curPath); //删除文件
    // })
}

const getFiles = (req, res) => {
    resSend(res, { list: getFilesData() })
}

const upload = (req, res) => {
    resSend(res)
}

const download = (req, res) => {
    var fileName = req.query.fileName
    fs.readFile(dirPath + '/' + fileName, function(err, data){  
        res.set({  
            'Content-Type': 'application/octet-stream',  //告诉浏览器这是一个二进制文件  
            'Content-Disposition': 'attachment; filename=' + encodeURI(fileName)  //告诉浏览器这是一个附件要下载是png图片  
        });  
        res.end(data)
    })  
}

module.exports = {
    del,
    getFiles,
    upload,
    download,
}