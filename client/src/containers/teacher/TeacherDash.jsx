import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { toast } from "react-toastify";
import {
  teacherDashboard,
  Courses,
  Classes,
  Departments,
  Teachers,
  onlyMyClasses,
} from "../../apis/url";
import TeacherNav from "../../components/TeacherNav";
import TeacherSideNav from "../../components/TeacherSideNav";
import TeacherHome from "./TeacherHome";
import TeacherClasses from "./TeacherClasses";
import TeacherTopNav1 from "../../components/TeacherTopNav1";
import TeacherTopNav2 from "../../components/TeacherTopNav2";
import TeacherAssignments from "./TeacherAssignments";
import TeacherGrades from "./TeacherGrades";
const TeacherDash = ({ toogleAuth }) => {
  /* State */
  const [teacher_first_name, setFirstName] = useState("");
  const [teacher_last_name, setLastName] = useState("");
  const [teacher_user_name, setUsername] = useState("");
  const [teacher_email, setEmail] = useState("");
  const [allCourses, setallCourses] = useState("");
  const [allTeachers, setallTeachers] = useState("");
  const [allDepartments, setallDepartments] = useState("");
  const [allClasses, setAllClasses] = useState("");

  const [myClasses, setMyClasses] = useState("");

  const [teacherInfo, setTeacherInfo] = useState("");
  const [teacherId, setTeacherId] = useState("");

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
      console.log(response.rows[0].teacher_id);
      setTeacherInfo(response.rows);
      setFirstName(response.rows[0].teacher_first_name);
      setLastName(response[0].teacher_last_name);
      setUsername(response[0].teacher_user_name);
      setEmail(response[0].teacher_email);
      setTeacherId(response.rows[0].teacher_id);

      /*  */
      const res2 = await fetch(Teachers, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const teacherRoster = await res2.json();
      console.log(teacherRoster.rows);
      console.log(Teachers);
      setallTeachers(teacherRoster);

      /*  */
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  const getCourses = async () => {
    try {
      const res = await fetch(Courses, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response.rows);
      console.log(response);
      setallCourses(response.rows);

      console.log(Courses);

      /*  */
      const res2 = await fetch(Classes, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response2 = await res2.json();
      console.log(response2.rows);
      console.log(response2);
      setAllClasses(response2.rows);

      console.log(Classes);
      /*  */
      /*  */

      console.log(teacherId);
      // const res3 = await fetch(onlyMyClasses, {
      //   method: "POST",
      //   headers: { token: localStorage.token },
      //   body: JSON.stringify(),
      // });

      // const response3 = await res3.json();
      // console.log(response3.rows);
      // console.log(response3);
      // setMyClasses(response3.rows);

      // console.log(onlyMyClasses);
      /*  */
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };
  const getDepartments = async () => {
    try {
      const res = await fetch(Departments, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response.rows);
      console.log(response);
      console.log(Departments);
      setallDepartments(response.rows);
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
    getCourses();
    getDepartments();
  }, []);

  return (
    <Fragment>
      <Router>
        <div className='row'>
          <div className='col-md-2 my-side'>
            <TeacherSideNav
              myId={teacherId}
              logout={logout}
              firstname={teacher_first_name}
            />
          </div>

          <div className='col-md-10'>
            <div className='row'>
              <TeacherTopNav1 myId={teacherId} firstname={teacher_first_name} />
              <TeacherTopNav2 myId={teacherId} firstname={teacher_first_name} />
            </div>
            <div className='row'>
              <Switch>
                <Route
                  exact
                  path='/teacher'
                  render={(props) => (
                    <TeacherHome
                      {...props}
                      subjects={allDepartments}
                      myId={teacherId}
                      firstname={teacher_first_name}
                      info={teacherInfo}
                      courseList={allCourses}
                      classList={allClasses}
                      myclassList={myClasses}
                      theTeachers={allTeachers}
                    />
                  )}
                />
                <Route
                  exact
                  path='/teacher/classes'
                  render={(props) =>
                    !props.auth ? (
                      <TeacherClasses
                        {...props}
                        myId={teacherId}
                        subjects={allDepartments}
                        info={teacherInfo}
                        courseList={allCourses}
                        classList={allClasses}
                        myclassList={myClasses}
                        theTeachers={allTeachers}
                        toogleAuth={toogleAuth}
                      />
                    ) : (
                      <Redirect to='/login/teacher' />
                    )
                  }
                />
                <Route
                  exact
                  path='/teacher/assignments'
                  render={(props) =>
                    !props.auth ? (
                      <TeacherAssignments
                        {...props}
                        myId={teacherId}
                        subjects={allDepartments}
                        info={teacherInfo}
                        courseList={allCourses}
                        classList={allClasses}
                        myclassList={myClasses}
                        theTeachers={allTeachers}
                        toogleAuth={toogleAuth}
                      />
                    ) : (
                      <Redirect to='/login/teacher' />
                    )
                  }
                />
                <Route
                  exact
                  path='/teacher/grades'
                  render={(props) =>
                    !props.auth ? (
                      <TeacherGrades
                        {...props}
                        myId={teacherId}
                        subjects={allDepartments}
                        info={teacherInfo}
                        courseList={allCourses}
                        classList={allClasses}
                        myclassList={myClasses}
                        theTeachers={allTeachers}
                        toogleAuth={toogleAuth}
                      />
                    ) : (
                      <Redirect to='/login/teacher' />
                    )
                  }
                />
                <Route
                  exact
                  path='/teacher/students'
                  render={(props) =>
                    !props.auth ? (
                      <TeacherClasses
                        {...props}
                        myId={teacherId}
                        subjects={allDepartments}
                        info={teacherInfo}
                        courseList={allCourses}
                        classList={allClasses}
                        theTeachers={allTeachers}
                        myclassList={myClasses}
                        toogleAuth={toogleAuth}
                      />
                    ) : (
                      <Redirect to='/login/teacher' />
                    )
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Fragment>
  );
};

export default TeacherDash;
