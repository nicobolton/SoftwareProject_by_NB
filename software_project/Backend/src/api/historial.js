/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {historial} = require('../controllers/historial.controller')


/* APIS */
router.get('/', historial)


module.exports = router