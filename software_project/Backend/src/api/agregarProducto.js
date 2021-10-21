const { Router } = require ('express')
const express = require('express')
const router = express.Router()
const { addProducto } = require('../controllers/addProducto.controller.js')

router.post('/', addProducto )

module.exports = router