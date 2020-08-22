const express = require('express')
const router = express.Router()
const { create, get, remove } = require(`${appG.RP}/controller/user`)

router.post('/create', create)
router.get('/get', get)
router.get('/remove', remove)

module.exports = router