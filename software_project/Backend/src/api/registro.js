/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {registro} = require('../controllers/registro.controller')


/* APIS */
router.post('/', registro)


module.exports = router