import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TeacherNav = (props) => {
  return (
    <Fragment>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            Logo
          </a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right'>
            <li>
              <Link to='/teacher/profile'>{props.firstname}</Link>
            </li>
            <li>
              <a onClick={(event) => props.logout(event)}>Logout</a>
            </li>
          </ul>
        </div>
        <div className='nav-content'>
          <ul className='tabs tabs-transparent'>
            <li className='tab'>
              <Link to='/teacher/classes'>Classes</Link>
            </li>
            <li className='tab'>
              <Link to='/teacher/assignments'>Assignments</Link>
            </li>
            <li className='tab'>
              <Link to='/teacher/assignments'>Grades</Link>
            </li>
            <li className='tab'>
              <Link to='/teacher/students'>Students</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default TeacherNav;
