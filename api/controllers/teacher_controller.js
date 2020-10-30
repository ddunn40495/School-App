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
    if (err) {
      console.log(err);
    }
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

router.post("/course/new", async (req, res) => {
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

//CREATE NEW COURSE

router.post("/class/new", async (req, res) => {
  const { course_id, course_instance_period, teacher_id } = req.body;
  try {
    let courseName = await pool.query(
      "SELECT course_name FROM courses WHERE courses.course_id = $1",
      [course_id]
    );

    const course_instance_name =
      courseName.rows[0].course_name +
      "-" +
      "P" +
      "-" +
      req.body.course_instance_period +
      "-" +
      req.body.course_id;
    console.log(course_instance_name);
    let newClass = await pool.query(
      "INSERT INTO course_instance(course_id, course_instance_period, teacher_id, course_instance_name)VALUES ( $1, $2, $3, $4) RETURNING *",
      [course_id, course_instance_period, teacher_id, course_instance_name]
    );

    console.log(newClass.rows);

    let classList = await pool.query("SELECT * FROM course_instance");
    res.json(classList);
  } catch (err) {
    if (err) {
      // console.log(err);
    }
    res.send("500 Error");
  }
});
/* ===========
GET ROUTE
============= */
//ALL TEACHERS

router.post("/all", async (req, res) => {
  try {
    let teachers = await pool.query("SELECT * FROM teachers");
    res.json(teachers);
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});

/* ===========
GET ROUTE
============= */
//INDEX

/* ===========
POST ROUTE
============= */
//CREATE NEW Assignment

router.post("/assignment/new", async (req, res) => {
  const { assignment_name, course_instance_id, assignment_type } = req.body;

  try {
    let assignment = await pool.query(
      "INSERT INTO assignments (assignment_name, course_instance_id, assignment_type) VALUES ( $1, $2, $3) RETURNING *",
      [assignment_name, course_instance_id, assignment_type]
    );

    console.log(assignment);

    let assignmentList = await pool.query("SELECT * FROM assignments");
    res.json(assignmentList);
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});
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
