import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TeacherGrades = (props) => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <select class='select'>
                <option value='1'>Product 1</option>
                <option value='2'>Product 2</option>
                <option value='3'>Product 3</option>
                <option value='4'>Product 4</option>
                <option value='5'>Product 5</option>
              </select>
              <label class='form-label select-label'>Product</label>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div class='card'>
            <div class='card-header text-center py-3 bg-light border-0'>
              <strong>Sales Performance KPIs</strong>
            </div>
            <div class='card-body'>
              <div class='table-responsive'>
                <table class='table table-hover text-nowrap'>
                  <thead>
                    <tr>
                      <th scope='col'></th>
                      <th scope='col'>Product Detail Views</th>
                      <th scope='col'>Unique Purchases</th>
                      <th scope='col'>Quantity</th>
                      <th scope='col'>Product Revenue</th>
                      <th scope='col'>Avg. Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>Value</th>
                      <td>18,492</td>
                      <td>228</td>
                      <td>350</td>
                      <td>$4,787.64</td>
                      <td>$13.68</td>
                    </tr>
                    <tr>
                      <th scope='row'>Percentage change</th>
                      <td>
                        <span class='text-danger'>
                          <i class='fas fa-caret-down mr-1'></i>
                          <span>-48.8%%</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>14.0%</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>46.4%</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>29.6%</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-danger'>
                          <i class='fas fa-caret-down mr-1'></i>
                          <span>-11.5%</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>Absolute change</th>
                      <td>
                        <span class='text-danger'>
                          <i class='fas fa-caret-down mr-1'></i>
                          <span>-17,654</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>28</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>111</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-success'>
                          <i class='fas fa-caret-up mr-1'></i>
                          <span>$1,092.72</span>
                        </span>
                      </td>
                      <td>
                        <span class='text-danger'>
                          <i class='fas fa-caret-down mr-1'></i>
                          <span>$-1.78</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to='/login/teacher'> Login</Link>

      <Link to='/'> Home</Link>
    </Fragment>
  );
};

export default TeacherGrades;
