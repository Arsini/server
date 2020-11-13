const express = require('express')
const router = express.Router()
const { getVideo } = require(`${appG.RP}/controller/video`)
router.get('/', getVideo)

module.exports = router