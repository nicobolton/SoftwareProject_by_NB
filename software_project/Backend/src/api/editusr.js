/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { editUser } = require('../controllers/editUser.controller')

/* APIS */
router.post('/', editUser)

module.exports = router