/* IMPORTS */

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

//-------------------------------------

/* CONFIGS */

const server = express()
dotenv.config()
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
server.use(cors())

/* VARIABLES */

var port = process.env.PORT || 4000
var ip = process.env.PORT || "localhost"

/* PORTS */

//server.use('/api/clientes', require('./src/api/clientes'))
//server.use('/api/register', require('./src/api/register'))
//server.use('/api/login', require('./src/api/login'))

/* SERVER */

server.listen(port, () => {
    console.log(`Servidor ViaSalud corriendo en: http://${ip}:${port}.`)
})