const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { modProducto } = require('../controllers/modProducto.controller.js')

router.post('/', modProducto)

module.exports = router