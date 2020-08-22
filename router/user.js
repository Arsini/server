const express = require('express')
const router = express.Router()
const userController = require(`${appG.RP}/controller/user`)

router.post('/create', userController.create)

module.exports = router