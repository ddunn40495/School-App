import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { studentDashboard } from "../../apis/url";

const StudentDash = ({ toogleAuth }) => {
  /* State */
  const [student_first_name, setFirstName] = useState("");
  const [student_last_name, setLastName] = useState("");
  const [student_user_name, setUsername] = useState("");
  const [student_email, setEmail] = useState("");
  const [student_grade_level, setYear] = useState("");

  /* Get Student info that will be rendered on the dashboard */

  const getStudentInfo = async () => {
    try {
      const res = await fetch(studentDashboard, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response);
      console.log(studentDashboard);
      setFirstName(response.student_first_name);
      setLastName(response.student_last_name);
      setUsername(response.student_user_name);
      setEmail(response.student_email);
      setYear(response.student_grade_level);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  /* Student Logout  */

  const logout = async (event) => {
    event.preventDefault();
    try {
      localStorage.removeItem("token");
      toogleAuth(false);
      toast.success("Successfully Logged Out");
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  useEffect(() => {
    getStudentInfo();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>

      <button onClick={(event) => logout(event)}>Logout</button>
    </div>
  );
};

export default StudentDash;
