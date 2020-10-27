// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const pool = require("./models/db");

// =======================================
//      CONTROLLERS
// =======================================
// const teacherController = require("./controllers/teacher_controller");
// app.use("/api/teacher", teacherController);
const studentController = require("./controllers/student_controller");
app.use("/api/student", studentController);
const authController = require("./controllers/authorize_controller");
app.use("/api/auth", authController);

app.post("/api/log", async (req, res) => {
  try {
    const students = await pool.query("SELECT * FROM students");
    res.json(students);
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});
// =======================================
//              LISTENER
// =======================================
app.listen(process.env.PORT || port, () => {
  console.log(`listening on port: ${port}`);
});
