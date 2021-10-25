const { Router } = require ('express')
const express = require('express')
const router = express.Router()
const { modStock } = require('../controllers/modStock.controller.js')

router.post('/', modStock )

module.exports = router