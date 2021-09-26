/* IMPORTS */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
//const pool = require('./db');

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


/* SERVER */

server.use("/api/clientes", require("./api/clientes")) //dar nombre a la routa

server.use("/api/registro", require("./api/registro"))

server.use("/api/login", require("./api/login"))

server.listen(port, () => {
    console.log(`Servidor ViaSalud corriendo en: http://${ip}:${port}.`)
})