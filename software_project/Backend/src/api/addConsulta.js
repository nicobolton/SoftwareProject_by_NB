const { Router } = require ('express')
const express = require('express')
const router = express.Router()
const { addConsulta } = require('../controllers/addConsulta.controller.js')

router.post('/', addConsulta )

module.exports = router