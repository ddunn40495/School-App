import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { log } from "../apis/url";
import TestSideNav from "../components/mdb/TestSideNav";
import TestTeacherHome from "../components/mdb/TestTeacherHome";
import TestTopNav1 from "../components/mdb/TestTopNav1";
import TestTopNav2 from "../components/mdb/TestTopNav2";

const Testdb = () => {
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
      {/*
       */}
      <div className='row'>
        <div className='col-md-2 my-side'>
          <TestSideNav />
        </div>

        <div className='col-md-10'>
          <div className='row'>
            <TestTopNav1 />
            <TestTopNav2 />
          </div>
          <div className='row'>
            {/* <Switch>
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
          </Switch> */}

            {/* TESTING WITHOUT ROUTER */}
            <TestTeacherHome />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testdb;
