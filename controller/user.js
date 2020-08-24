const { createUser, getUser, removeUser, updataUser } = require(`${appG.RP}/models/user`)
const create = async (req, res) => {
    const reqData = req.body
    const data = await createUser(reqData)
    if(data) {
        res.send({
            meta:  {
                state: 200,
                msg: 'success'
            },
            data: {}
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: 'fail',
            },
            data: {}
        })
    }
}

const get = async (req, res) => {
    const reqData = req.query
    const data = await getUser(reqData)
    if(data) {
        res.send({
            meta:  {
                state: 200,
                msg: 'success'
            },
            data: {
                list: data
            }
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: 'fail',
            },
            data: {}
        })
    }
}

const remove = async (req, res) => {
    const reqData = req.query
    const data = await removeUser(reqData)
    if(data) {
        res.send({
            meta:  {
                state: 200,
                msg: 'success'
            },
            data: {}
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: 'fail',
            },
            data: {}
        })
    }
}

const updata = async (req, res) => {
    const reqData = req.body
    const data = await updataUser(reqData)
    if(data) {
        res.send({
            meta:  {
                state: 200,
                msg: 'success'
            },
            data: {}
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: 'fail',
            },
            data: {}
        })
    }
}

module.exports = {
    create,
    get,
    remove,
    updata,
}