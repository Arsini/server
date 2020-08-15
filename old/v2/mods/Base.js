function Base(){
    this.router = this.express.Router()
}
Base.prototype.express = require('express')
Base.prototype.app = require('express')()
Base.prototype.fs = require('fs')
module.exports = Base