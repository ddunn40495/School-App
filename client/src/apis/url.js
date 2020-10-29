const studentDashboard =
  process.env.NODE_ENV === "production"
    ? "/api/student"
    : "http://localhost:4000/api/student";

const teacherDashboard =
  process.env.NODE_ENV === "production"
    ? "/api/teacher"
    : "http://localhost:4000/api/teacher";

const studentRegister =
  process.env.NODE_ENV === "production"
    ? "/api/auth/register/student"
    : "http://localhost:4000/api/auth/register/student";

const teacherRegister =
  process.env.NODE_ENV === "production"
    ? "/api/auth/register/teacher"
    : "http://localhost:4000/api/auth/register/teacher";

const studentLogin =
  process.env.NODE_ENV === "production"
    ? "/api/auth/login/student"
    : "http://localhost:4000/api/auth/login/student";
const teacherLogin =
  process.env.NODE_ENV === "production"
    ? "/api/auth/login/teacher"
    : "http://localhost:4000/api/auth/login/teacher";

const auth =
  process.env.NODE_ENV === "production"
    ? "/api/auth/verify"
    : "http://localhost:4000/api/auth/verify";

const log =
  process.env.NODE_ENV === "production"
    ? "/api/log"
    : "http://localhost:4000/api/log";

const newCourse =
  process.env.NODE_ENV === "production"
    ? "/api/teacher/course/new"
    : "http://localhost:4000/api/teacher/course/new";
const newClass =
  process.env.NODE_ENV === "production"
    ? "/api/teacher/class/new"
    : "http://localhost:4000/api/teacher/class/new";
export {
  studentDashboard,
  teacherDashboard,
  studentRegister,
  teacherRegister,
  studentLogin,
  teacherLogin,
  newCourse,
  newClass,
  auth,
  log,
};
