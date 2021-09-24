const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 4000,
    database: "viasalud"
});

module.exports = pool;