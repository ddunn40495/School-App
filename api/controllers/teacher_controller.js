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
//CREATE NEW COURSE

router.post("/course/new", authorize, async (req, res) => {
  const { course_name, department_id } = req.body;

  try {
    let newCourse = await pool.query(
      "INSERT INTO courses (course_name, department_id) VALUES ( $1, $2) RETURNING *",
      [course_name, department_id]
    );

    console.log(newCourse);

    let allCourses = await pool.query("SELECT * FROM courses");
    res.json(allCourses);
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});
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
