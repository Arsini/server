const utils = {}
const os = require('os')
utils.getIPAddress = () => {
    const interfaces = os.networkInterfaces();
    for(let devName in interfaces){
        const iface = interfaces[devName];
        for(let i=0;i<iface.length;i++){
            const alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}

utils.resSend = (res, data={}) => {
    res.send({
        meta:  {
            state: 200,
            msg: 'success'
        },
        data,
    })
}

utils.resSendErr = (res, code=400, msg) => {
    res.status(code).send({
        meta:  {
            state: code,
            msg,
        },
    })
}

module.exports = utils