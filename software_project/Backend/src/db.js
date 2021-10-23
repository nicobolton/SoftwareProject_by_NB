const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "123",
    host: "localhost",
    port: "5432",
    database: "viasalud"
};

const pool = new Pool(config);

module.exports = pool;