import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";

const TeacherHome = (props) => {
  return (
    <Fragment>
      <div className='row-divs' id='d1'>
        <h3>{props.firstname}</h3>
      </div>
      <div className='row-divs' id='d2'></div>
      <div className='row-divs' id='d3'></div>

      <div className='row-divs' id='d4'></div>
      <div className='row-divs' id='d5'></div>
    </Fragment>
  );
};

export default TeacherHome;
