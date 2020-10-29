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

const TeacherClasses = (props) => {
  return (
    <Fragment>
      <div className='row-divs' id='d1'></div>
      <div className='row-divs' id='d2'></div>
      <div className='row-divs' id='d3'>
        <h3>{props.firstname}</h3>
      </div>
    </Fragment>
  );
};

export default TeacherClasses;
