const Base = require('./Base')
function Boot(){
    Base.bind(this)
    this.init = function(routers){
        for (const item of routers) {
            this.app.use(item.name, item.router)
        }
        this.app.use(this.express.static('./www'))
        this.app.listen(1000)
        console.log(`http://localhost:1000/`)
    }
}
Boot.prototype = new Base()
Boot.prototype.constructor = Boot
module.exports = new Boot()