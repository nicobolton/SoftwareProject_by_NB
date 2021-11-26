const { Router } = require ('express')
const express = require('express')
const router = express.Router()
const { buscarProducto } = require('../controllers/buscarProducto.controller.js')

router.post('/', buscarProducto )

module.exports = router