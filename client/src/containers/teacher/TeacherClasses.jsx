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
  return <h3>yes</h3>;
};

export default TeacherClasses;
