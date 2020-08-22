/**
 * root: admin/3323221lzc
 * master: ethanol/3323221lzc
 */
// mongod --auth --dbpath /usr/local/mongodb/data/db --logpath /usr/local/mongodb/log/mongodb.log --fork
const mongoose = require('mongoose')
const URL = 'mongodb://localhost:27017/master'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'master',
    user: 'ethanol',
    pass: '3323221lzc',
}
const cb = err => {
    if(err){
        console.log(err)
        return
    }
    console.log('successful')
}
mongoose.connect(URL, options, cb)
// mongoose.connect(
//     'mongodb://localhost:27017/test', 
//     {
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
//     }, 
//     err => {
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log('successful')
//     }
// )

