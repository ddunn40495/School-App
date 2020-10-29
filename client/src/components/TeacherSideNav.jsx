import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";

const TeacherSideNav = (props) => {
  return (
    <Fragment>
      <ul className='teacher-sidenav'>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Classes</a>
        </li>
        <li>
          <a>Assignments</a>
        </li>
        <li>
          <a>Grades</a>
        </li>
        <li>
          <a>Students</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default TeacherSideNav;
