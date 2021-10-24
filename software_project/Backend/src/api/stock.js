/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { stock } = require('../controllers/stock.controller')


/* APIS */
router.get('/', stock)


module.exports = router