/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {registro} = require('../controllers/clientes.controller')


/* APIS */
router.get('/', registro)


module.exports = router