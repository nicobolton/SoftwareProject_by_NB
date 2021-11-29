/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { editPassword } = require('../controllers/editPassword.controller')

/* APIS */
router.post('/', editPassword)

module.exports = router