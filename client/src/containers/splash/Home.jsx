import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { log, teacherLogin } from "./../../apis/url";
import TeacherAssignments from "../teacher/TeacherAssignments";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import StudentLogin from "../user_authentication/StudentLogin";
import TeacherLogin from "../user_authentication/TeacherLogin";
const Home = () => {
  const consoleLog = async () => {
    try {
      const res = await fetch(log, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response);
      console.log(log);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  useEffect(() => {
    consoleLog();
  }, []);
  return (
    <Fragment>
      <div id='intro'>
        <div class='mask'>
          <div class='container d-flex justify-content-center align-items-center h-100'>
            <div class='row align-items-center'>
              <div class='col-md-6 my-5'>
                <h1 class='mb-5'>Homeroom</h1>
                <p class='lead mb-5'>
                  Access Your Grades From Anywhere <br></br>
                  See All TeacherAssignments<br></br>
                  Designed To Fit Around Your Busy Life<br></br>
                </p>
                <Link to='/login/student'>
                  <button type='button' class='btn btn-primary btn-lg mr-1'>
                    Students
                  </button>
                </Link>
                <Link to='/login/teacher'>
                  <button type='button' class='btn btn-primary btn-lg ml-1'>
                    Teachers
                  </button>
                </Link>
              </div>
              <div class='col-md-6'>
                <img
                  src='https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
                  alt='background-image'
                  class='img-fluid'
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
