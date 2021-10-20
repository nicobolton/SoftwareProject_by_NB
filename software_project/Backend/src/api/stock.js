/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { Stock } = require('../controllers/stock.controller')


/* APIS */
router.get('/', Stock)


module.exports = router