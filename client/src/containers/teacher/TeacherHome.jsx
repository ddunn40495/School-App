import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";

const TeacherHome = (props) => {
  return (
    <Fragment>
      <div className='row first-row'>
        <div className='first-row-divs col m3' id='d1'>
          <h3>{props.firstname}</h3>
        </div>
        <div className='first-row-divs col m3' id='d2'></div>
        <div className='first-row-divs col m3' id='d3'></div>
      </div>
      <div className='row second-row'>
        <div className='second-row-divs col m3' id='d4'></div>
        <div className='second-row-divs col m3' id='d5'></div>
        <div className='second-row-divs col m3' id='d6'></div>
      </div>
    </Fragment>
  );
};

export default TeacherHome;
