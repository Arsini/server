const boot = require('./mods/Boot')
const routers = [
    {
        name: '/ws',
        router: require(`./mods/WebSocket`),
    },
    {
        name: '/upload',
        router: require(`./mods/Upload`),
    },
]
boot.init(routers)