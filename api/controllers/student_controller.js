// =======================================
//
//          TEACHER CONTROLLER
//
// =======================================

// =========================
//       DEPENDENCIES
// =========================
const express = require("express");
const router = express.Router();
// =======================================
//              DATABASE
// =======================================
const knex = require("knex")({
  client: "pg",
  version: "13.0",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "braves1995",
    database: "school",
  },
});
// =======================================
//              ROUTES
// =======================================

/* ===========
GET ROUTE
============= */
//NEW

/* ===========
POST ROUTE
============= */
//CREATE

/* ===========
GET ROUTE
============= */
//SHOW

/* ===========
GET ROUTE
============= */
//INDEX

/* ===========
  PUT ROUTE
  ============= */
//UPDATE

/* ===========
  GET ROUTE
  ============= */
//EDIT

/* ===========
  DELETE ROUTE
  ============= */
//DELETE

module.exports = router;
