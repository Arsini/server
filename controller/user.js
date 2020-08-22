const { createModel } = require(`${appG.RP}/models/user`)
const create = async (req, res) => {
    const data = req.body
    console.log(data)
    const rs = createModel(data)
    if(rs) {
        res.send({
            meta:  {
                state: 200,
                msg: 'success'
            },
            data: null
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: 'fail',
            },
            data: null
        })
    }
}

module.exports = {
    create,
}