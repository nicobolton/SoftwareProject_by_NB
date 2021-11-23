/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { editProducto } = require('../controllers/editProducto.controller')


/* APIS */
router.get('/', editProducto)


module.exports = router