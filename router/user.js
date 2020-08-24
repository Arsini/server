const express = require('express')
const router = express.Router()
const { create, get, remove, updata } = require(`${appG.RP}/controller/user`)

router.post('/create', create)
router.post('/updata', updata)
router.get('/get', get)
router.get('/remove', remove)


module.exports = router