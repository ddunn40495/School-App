// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const pool = require("./models/db");
// =======================================
//              DATABASE
// =======================================
// const knex = require("knex")({
//   client: "pg",
//   version: "13.0",
//   connection: {
//     host: "localhost",
//     user: "postgres",
//     password: "braves1995",
//     database: "school",
//   },
// });

// =======================================
//      CONTROLLERS
// =======================================
const teacherController = require("./controllers/teacher_controller");
app.use("/teacher", teacherController);
const studentController = require("./controllers/student_controller");
app.use("/student", studentController);

//routes

// app.get("/", (req, res) => {
//   knex
//     .select()
//     .from("teachers")
//     .then((data) => {
//       res.send(data);
//     });
// });

// app.get("/", (req, res) => {
//   knex("department")
//     .join("course", "department.department_id", "=", "course.department_id")
//     .select()
//     .then((err, data) => {
//       console.log(data);
//     });
// });

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

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
