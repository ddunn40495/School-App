// =======================================
//
//     Teacher      CONTROLLER
//
// =======================================

// =========================
//       DEPENDENCIES
// =========================
const express = require("express");
const router = express.Router();
const pool = require("../models/db");
const authorize = require("../middleware/authorization");
// =======================================
//              DATABASE
// =======================================

// =======================================
//              ROUTES
// =======================================

router.post("/", authorize, async (req, res) => {
  try {
    const teacher = await pool.query(
      "SELECT * FROM teachers WHERE teachers.teacher_id = $1",
      [req.user.id]
    );
    res.json(teacher);
    console.log(req);
  } catch (err) {
    console.error(err.message);
  }
});

//get every student in a class
//need to add where clasue to take in param for what class
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
