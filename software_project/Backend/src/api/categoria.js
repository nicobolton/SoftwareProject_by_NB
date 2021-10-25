/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {categoria} = require('../controllers/categorias.controller')


/* APIS */
router.get('/', categoria)


module.exports = router