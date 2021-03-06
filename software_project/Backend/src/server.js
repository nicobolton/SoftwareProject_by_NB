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

server.use("/api/editusr", require("./api/editusr"))

server.use("/api/historial", require("./api/historial"))

server.use("/api/agregarProducto", require("./api/agregarProducto"))

server.use("/api/modificarProducto", require("./api/modificarProducto"))

server.use("/api/producto", require("./api/producto"))

server.use("/api/editPassword", require("./api/editPassword"))

server.use("/api/stock", require("./api/stock"))

server.use("/api/addConsulta", require("./api/addConsulta"))

server.use("/api/modificarStock", require("./api/modificarStock"))

server.use("/api/categoria", require("./api/categoria"))

server.listen(port, () => {
    console.log(`Servidor ViaSalud corriendo en: http://${ip}:${port}.`)
})