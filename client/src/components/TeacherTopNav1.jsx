import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

const TeacherTopNav1 = (props) => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg scrolling-navbar navbar-light bg-light double-nav'>
        <button
          id='toggler'
          className='btn btn-dark mt-5'
          data-toggle='sidenav'
          data-target='#full-screen-example'
        >
          <i className='fas fa-bars'></i>
        </button>
        <div>
          <span className='navbar-brand mb-0 h1'>{props.firstname}</span>
        </div>
      </nav>
    </Fragment>
  );
};

export default TeacherTopNav1;
