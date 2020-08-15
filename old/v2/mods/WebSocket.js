const Base = require('./Base')
const expressWs = require('express-ws')
function Ws(){
    Base.bind(this)
    expressWs(this.app)
    this.router.ws('/', function(ws, req){
        ws.on('message', function(msg) {
            console.log(msg)
            ws.send(msg);
        });
    })
}
Ws.prototype = new Base()
Ws.prototype.constructor = Ws
const ws = new Ws()
module.exports = ws.router