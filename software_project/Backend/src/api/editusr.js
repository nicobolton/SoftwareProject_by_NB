/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const {editusr} = require('../controllers/editUser.controller')


/* APIS */
router.post('/', editusr)


module.exports = router