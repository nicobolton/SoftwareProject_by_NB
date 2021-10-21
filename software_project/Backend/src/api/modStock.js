/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { modStock } = require('../controllers/modStock.controller')


/* APIS */
router.get('/', modStock)


module.exports = router