/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {login} = require('../controllers/login.controller')


/* APIS */
router.post('/', login)


module.exports = router