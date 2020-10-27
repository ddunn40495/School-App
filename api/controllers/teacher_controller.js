// =======================================
//
//           CONTROLLER
//
// =======================================

// =========================
//       DEPENDENCIES
// =========================
const express = require("express");
const router = express.Router();
const pool = require("../models/db");
// =======================================
//              DATABASE
// =======================================

// =======================================
//              ROUTES
// =======================================
//get every student in a class
//need to add where clasue to take in param for what class
app.get("/", async (req, res) => {
  try {
    const allStudents = await pool.query(
      "SELECT * FROM students JOIN student_courses ON student_courses.student_id = students.student_id JOIN course_instance ON course_instance.course_instance_id = student_courses.course_instance_id JOIN course ON course.course_id = course_instance.course_id JOIN department ON department.department_id = course.department_id WHERE course_instance.course_instance_id = 1"
    );
    res.json(allStudents.rows);
  } catch (err) {
    console.error(err.message);
  }
});
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
