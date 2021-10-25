/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {producto} = require('../controllers/producto.controller')


/* APIS */
router.get('/', producto)


module.exports = router