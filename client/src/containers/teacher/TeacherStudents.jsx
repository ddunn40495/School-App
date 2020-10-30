import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";

const TeacherStudents = (props) => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Teacher Name</a>
              </h4>
              <p class='card-text'>{props.firstname}</p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Card title</a>
              </h4>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Card title</a>
              </h4>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Card title</a>
              </h4>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Card title</a>
              </h4>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <h4 class='card-title'>
                <a>Card title</a>
              </h4>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeacherStudents;
