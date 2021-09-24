/* IMPORTS */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const pool = require('./db');

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

server.get("/", async (req, res) => {
    res.send("ola");
});

server.post("/singup", async (req, res) => {
    const { user, lname, pass, email, tel } = req.body;
    const getUser = await pool.query("SELECT usuario FROM Usuario where usuario = $1::text", [user]);
    if (getUserUser.rows.length) {
        res.json({
            status: 0
        })
        return;
    }
    else {
        await pool.query("INSERT INTO Usuario(usuario,apellido,correo,clave,telefono) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text", [user, lname, email, pass, tel]);
        res.json({
            status: 1,
            user: user,
            lname: lname,
            email: email,
            pass: pass,
            tel: tel
        })
        return;
    }
});

server.post("/Signin", async (req, res) => {
    const { user, pass } = req.body;
    const getUser = await pool.query("SELECT id_usuario FROM Usuario where correo = $1::text AND clave = $2::text", [user, pass]);
    if (getUser.rows.length) {
        res.json({
            status: 1,
            token: getUser.rows[0].id
        })
        return;
    } else {
        res.json({
            status: 0
        })
        return;
    }
});

server.listen(port, () => {
    console.log(`Servidor ViaSalud corriendo en: http://${ip}:${port}.`)
})