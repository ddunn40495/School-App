import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { teacherDashboard } from "../../apis/url";

const TeacherDash = ({ toogleAuth }) => {
  /* State */
  const [teacher_first_name, setFirstName] = useState("");
  const [teacher_last_name, setLastName] = useState("");
  const [teacher_user_name, setUsername] = useState("");
  const [teacher_email, setEmail] = useState("");

  /* Get Teacher info that will be rendered on the dashboard */

  const getTeacherInfo = async () => {
    try {
      const res = await fetch(teacherDashboard, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response);
      console.log(teacherDashboard);
      setFirstName(response.teacher_first_name);
      setLastName(response.teacher_last_name);
      setUsername(response.teacher_user_name);
      setEmail(response.teacher_email);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  /* Teacher Logout  */

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
    getTeacherInfo();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>

      <button onClick={(event) => logout(event)}>Logout</button>
    </div>
  );
};

export default TeacherDash;
