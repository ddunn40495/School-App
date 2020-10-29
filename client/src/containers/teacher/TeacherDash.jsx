import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { toast } from "react-toastify";
import { teacherDashboard } from "../../apis/url";
import TeacherNav from "../../components/TeacherNav";
import TeacherSideNav from "../../components/TeacherSideNav";
import TeacherHome from "./TeacherHome";
import TeacherClasses from "./TeacherClasses";

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

  const makeNewCourse = async () => {};
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
      <Router>
        <TeacherNav logout={logout} firstname={teacher_first_name} />
        <div className='side-style'>
          <TeacherSideNav firstname={teacher_first_name} />
        </div>
        <div className='contain'>
          <Switch>
            <Route
              exact
              path='/teacher'
              render={(props) => (
                <TeacherHome {...props} firstname={teacher_first_name} />
              )}
            />
            <Route
              exact
              path='/teacher/classes'
              render={(props) =>
                !props.auth ? (
                  <TeacherClasses {...props} toogleAuth={toogleAuth} />
                ) : (
                  <Redirect to='/login/teacher' />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default TeacherDash;
