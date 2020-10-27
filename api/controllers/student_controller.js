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
const authorize = require("../middleware/authorization");
// =======================================
//              DATABASE
// =======================================

// =======================================
//              ROUTES
// =======================================

/* ===========
Dashboard Route
============= */
router.post("/", authorize, async (req, res) => {
  try {
    const student = await pool.query(
      "SELECT * FROM students JOIN student_courses ON student_courses.student_id = students.student_id JOIN course_instance ON course_instance.course_instance_id = student_courses.course_instance_id JOIN course ON course.course_id = course_instance.course_instance_id JOIN teachers ON teachers.teacher_id = course_instance.teacher_id WHERE students.student_id = $1 AND student_courses.student_id = $1",
      [req.user.id]
    );
    res.json(student);
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});

module.exports = router;
