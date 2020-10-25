const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "braves1995",
  host: "localhost",
  port: 5432,
  database: "school",
});

module.exports = pool;
