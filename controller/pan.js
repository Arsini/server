const fsPromises = require('fs').promises
const fs = require('fs')
const path = require("path")
const mime = require('mime')
const dirPath = appG.RP + '/uploads'
const { resSend, resSendErr } = appG.utils
//获取文件信息
const getFilesData = () =>{
    const readDir = fs.readdirSync(dirPath);
    const fileList = []
    readDir.map(folder => {
        const fullpath = path.join(dirPath, folder)
        const folderStat = fs.statSync(fullpath)
        if(folderStat.isDirectory()){
            const readFiles = fs.readdirSync(fullpath)
            readFiles.map(fileName => {
                const filePath = path.join(fullpath, fileName)
                const fileStat = fs.statSync(filePath)
                const size = Math.floor(fileStat.size/1024)
                const getType = mime.getType(filePath)
                const type = getType? mime.getExtension(getType) : '--'
                fileList.push({
                    name: fileName,
                    size,
                    type,
                    folder,
                })
            })
		}
    })
    return fileList
}
const del = (req, res) => {
    const { folder, fileName } = req.query
    const filePath = path.join(dirPath, folder, fileName)
    //删除单个
    fsPromises.unlink(filePath).then(() => {
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
    const { folder, fileName } = req.query
    const filePath = path.join(dirPath, folder, fileName)
    // fs.readFile(filePath, function(err, data){  
    //     res.set({  
    //         'Content-Type': 'application/octet-stream',  //告诉浏览器这是一个二进制文件  
    //         'Content-Disposition': 'attachment; filename=' + encodeURI(fileName)  //告诉浏览器这是一个附件要下载是png图片  
    //     });  
    //     res.end(data)
    // })
    const rs = fs.createReadStream(filePath)
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',  //告诉浏览器这是一个二进制文件 
        'Content-Disposition': 'attachment; filename=' + encodeURI(fileName)  //告诉浏览器这是一个附件要下载是png图片  
    })
    rs.pipe(res)
    rs.on('end', function () {
        res.end()
    })
}

module.exports = {
    del,
    getFiles,
    upload,
    download,
}