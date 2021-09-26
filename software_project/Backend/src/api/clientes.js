/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {clientes} = require('../controllers/clientes.controller')
//const router = require('./register')

/* APIS */
router.get('/', clientes)


module.exports = router