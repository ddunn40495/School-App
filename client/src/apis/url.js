const studentDashboard =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/student"
    : "http://localhost:4000/api/student";

const teacherDashboard =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/teacher"
    : "http://localhost:4000/api/teacher";

const studentRegister =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/auth/register/student"
    : "http://localhost:4000/api/auth/register/student";

const teacherRegister =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/auth/register/teacher"
    : "http://localhost:4000/api/auth/register/teacher";

const studentLogin =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/auth/login/student"
    : "http://localhost:4000/api/auth/login/student";
const teacherLogin =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/auth/login/teacher"
    : "http://localhost:4000/api/auth/login/teacher";

const auth =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/auth/verify"
    : "http://localhost:4000/api/auth/verify";

const log =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/log"
    : "http://localhost:4000/api/log";

const newCourse =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/teacher/course/new"
    : "http://localhost:4000/api/teacher/course/new";
const newClass =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/teacher/class/new"
    : "http://localhost:4000/api/teacher/class/new";
const newAssignment =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/assignment/new"
    : "http://localhost:4000/api/teacher/assignment/new";

const Courses =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/course/all"
    : "http://localhost:4000/api/course/all";

const Classes =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/class/all"
    : "http://localhost:4000/api/class/all";
const onlyMyClasses =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/class/me"
    : "http://localhost:4000/api/class/me";

const Departments =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/department/all"
    : "http://localhost:4000/api/department/all";
const Teachers =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000/api/teacher/all"
    : "http://localhost:4000/api/teacher/all";

export {
  studentDashboard,
  teacherDashboard,
  studentRegister,
  teacherRegister,
  studentLogin,
  teacherLogin,
  newCourse,
  newClass,
  newAssignment,
  Courses,
  Classes,
  onlyMyClasses,
  Departments,
  Teachers,
  auth,
  log,
};
