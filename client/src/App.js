import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { auth } from "./apis/url";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Testdb from "./containers/Test";

/* Student Components */
import StudentLogin from "./containers/user_authentication/StudentLogin";
import StudentDash from "./containers/student/StudentDash";
import NewStudent from "./containers/user_authentication/NewStudent";

/* Teacher Components */
import TeacherLogin from "./containers/user_authentication/TeacherLogin";
import TeacherDash from "./containers/teacher/TeacherDash";
import NewTeacher from "./containers/user_authentication/NewTeacher";

/* Main App Component */
function App() {
  const checkAuth = async () => {
    try {
      const res = await fetch(auth, {
        method: "POST",
        headers: { token: localStorage.token },
      });
      console.log(auth);
      const response = await res.json();
      response === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };
  const toogleAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            exact
            path='/login/student'
            render={(props) =>
              !isAuthenticated ? (
                <StudentLogin {...props} toogleAuth={toogleAuth} />
              ) : (
                <Redirect to='/student' />
              )
            }
          />
          <Route
            exact
            path='/login/teacher'
            render={(props) =>
              !isAuthenticated ? (
                <TeacherLogin {...props} toogleAuth={toogleAuth} />
              ) : (
                <Redirect to='/teacher' />
              )
            }
          />
          <Route exact path='/' render={() => <Testdb />} />
          <Route
            exact
            path='/new/student'
            render={(props) =>
              !isAuthenticated ? (
                <NewStudent {...props} toogleAuth={toogleAuth} />
              ) : (
                <Redirect to='/student' />
              )
            }
          />
          <Route
            exact
            path='/new/teacher'
            render={(props) =>
              !isAuthenticated ? (
                <NewTeacher {...props} toogleAuth={toogleAuth} />
              ) : (
                <Redirect to='/teacher' />
              )
            }
          />

          <Route
            exact
            path='/student'
            render={(props) =>
              isAuthenticated ? (
                <StudentDash {...props} toogleAuth={toogleAuth} />
              ) : (
                <Redirect to='/login/student' />
              )
            }
          />
          <Route
            exact
            path='/teacher'
            render={(props) =>
              isAuthenticated ? (
                <TeacherDash {...props} toogleAuth={toogleAuth} />
              ) : (
                <Redirect to='/login/teacher' />
              )
            }
          />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
