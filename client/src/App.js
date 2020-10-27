import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

/* Components */
import StudentLogin from "./containers/user_authentication/StudentLogin";
import StudentDash from "./containers/student/StudentDash";

/* Main App Component */
function App() {
  const checkAuth = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/verify", {
        method: "POST",
        headers: { token: localStorage.token },
      });

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
        <div className='container'>
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
            {/* <Route
              exact
              path='/register/student'
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} toogleAuth={toogleAuth} />
                ) : (
                  <Redirect to='/dashboard' />
                )
              }
            /> */}
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
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
