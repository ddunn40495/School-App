// =======================================
//
//          AUTHORIZE CONTROLLER
//
// =======================================

// =========================
//       DEPENDENCIES
// =========================
const express = require("express");
const router = express.Router();
const pool = require("../models/db");
const bcrypt = require("bcrypt");
const validStudentInfo = require("../middleware/student_validation");
const validTeacherInfo = require("../middleware/teacher_validation");
const makeToken = require("../middleware/makeToken");
const authorize = require("../middleware/authorization");

//
// =======================================
//              ROUTES
// =======================================

/* =================
Register Routes
=================== */

/* Make Student Account */

router.post("/register/student", validStudentInfo, async (req, res) => {
  const { first_name, last_name, username, password, email, year } = req.body;

  try {
    const student = await pool.query(
      "SELECT * FROM students WHERE email = $1",
      [email]
    );

    if (student.rows.length > 0) {
      return res
        .status(401)
        .json(
          "User is already in the system please login. Ask your teacher for assitance or put in a tech support ticket if you have trouble logging in!!!"
        );
    }
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newStudent = await pool.query(
      "INSERT INTO students(first_name, last_name, username, password, email, year) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [first_name, last_name, username, bcryptPassword, email, year]
    );

    const token = makeToken(newStudent.rows[0].student_id);

    return res.json({ token });
  } catch (err) {
    if (!err) {
      console.log("200 Success");
    } else {
      console.log(err.message);
    }
    res.send("500 Error");
  }
});

/* Make Teacher Account */

router.post("/register/teacher", validTeacherInfo, async (req, res) => {
  const { first_name, last_name, username, password, email } = req.body;

  try {
    const teacher = await pool.query(
      "SELECT * FROM teachers WHERE email = $1",
      [email]
    );

    if (teacher.rows.length > 0) {
      return res
        .status(401)
        .json(
          "User is already in the system please login. Ask Mr.Robinsion to how help resetting password or put in a tech support ticket for futher support!!!"
        );
    }
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newTeacher = await pool.query(
      "INSERT INTO teachers (first_name, last_name, username, password, email) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [first_name, last_name, username, bcryptPassword, email]
    );

    const token = makeToken(newTeacher.rows[0].teacher_id);

    return res.json({ token });
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});

/* =================
Login Routes
=================== */

/* Login to Student Account */
router.post("/login/student", validStudentInfo, async (req, res) => {
  const { username, password } = req.body;

  try {
    const student = await pool.query(
      "SELECT * FROM students WHERE username = $1",
      [username]
    );

    if (student.rows.length === 0) {
      return res
        .status(401)
        .json(
          "Username and/or passord is not found. Ask your teacher for assitance or put in a tech support ticket if you have trouble logging in!!!"
        );
    }

    const checkPassword = await bcrypt.compare(
      password,
      student.rows[0].password
    );

    if (!checkPassword) {
      return res
        .status(401)
        .json(
          "Username and/or passord is not found. Ask your teacher for assitance or put in a tech support ticket if you have trouble logging in!!!"
        );
    }

    const token = makeToken(student.rows[0].student_id);
    return res.json({ token });
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});

/* Login to Teacher Account */
router.post("/login/teacher", validTeacherInfo, async (req, res) => {
  const { username, password } = req.body;

  try {
    const teacher = await pool.query(
      "SELECT * FROM teacher WHERE username = $1",
      [username]
    );

    if (teacher.rows.length === 0) {
      return res
        .status(401)
        .json(
          "Username and/or passord is not found. Please put in a tech support ticket if you have trouble logging in!!!"
        );
    }

    const checkPassword = await bcrypt.compare(
      password,
      teacher.rows[0].password
    );

    if (!checkPassword) {
      return res
        .status(401)
        .json(
          "Username and/or passord is not found. Please put in a tech support ticket if you have trouble logging in!!!"
        );
    }

    const token = makeToken(teacher.rows[0].teacher_id);
    return res.json({ token });
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});

/* Authorization Middleware */

router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
