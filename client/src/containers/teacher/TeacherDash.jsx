import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { teacherDashboard } from "../../apis/url";
import TeacherNav from "../../components/TeacherNav";
import TeacherSideNav from "../../components/TeacherSideNav";
import TeacherHome from "./TeacherHome";

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
      console.log(response.rows);
      console.log(teacherDashboard);
      setFirstName(response.rows[0].teacher_first_name);
      setLastName(response.rows[0].teacher_last_name);
      setUsername(response.rows[0].teacher_user_name);
      setEmail(response.rows[0].teacher_email);
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
    <Fragment>
      <TeacherNav firstname={teacher_first_name} />
      <div className='side-style'>
        <TeacherSideNav firstname={teacher_first_name} />
      </div>

      <div className='container'>
        <TeacherHome firstname={teacher_first_name} />

        <button onClick={(event) => logout(event)}>Logout</button>
      </div>
    </Fragment>
  );
};

export default TeacherDash;
