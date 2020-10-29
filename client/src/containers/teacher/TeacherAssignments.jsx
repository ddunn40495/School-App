import React, { useEffect, useState, Fragment } from "react";

import { toast } from "react-toastify";

const TeacherAssignments = (props) => {
  /* State */
  const [allClasses, setAllClasses] = useState("");
  const [myClasses, setLastName] = useState("");

  const [inputs, setInputs] = useState({
    assignment_name: "",
    course_instance_id: "",
    assignment_type: "",
  });

  const { assignment_name, course_instance_id, assignment_type } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const body = {
        assignment_name,
        course_instance_id,
        assignment_type,
      };

      console.log(assignment_name);
      console.log(course_instance_id);
      console.log(assignment_type);

      const res = await fetch(newCourse, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const logInputs = () => {
    console.log(assignment_name);
    console.log(course_instance_id);
    console.log(assignment_type);
  };
  return (
    <Fragment>
      <h1>New Course</h1>
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
        {/* <button onClick={logInputs}>LOG</button> */}
        <div className='col'>
          <div class='card'>
            <div class='card-body'>
              <form
                onSubmit={submitForm}
                class='text-center border border-light p-5'
              >
                <p class='h4 mb-4'>Make New Course</p>

                <div class='form-row mb-4'>
                  <div class='col'>
                    <input
                      type='text'
                      name='assignment_name'
                      value={assignment_name}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      placeholder='assignment_name'
                    ></input>
                  </div>
                  <div class='col'>
                    <select
                      name='course_instance_id'
                      type='number'
                      value={course_instance_id}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option value='' disabled selected>
                        Which Class
                      </option>
                      <option value='1'>Math</option>
                    </select>
                  </div>
                  <div class='col'>
                    <select
                      name='assignment_type'
                      type='text'
                      value={assignment_type}
                      onChange={(event) => onChange(event)}
                      class='form-control'
                      class='mdb-select md-form'
                    >
                      <option value='' disabled selected>
                        Choose Type
                      </option>
                      <option value='homework'>Homework</option>
                      <option value='reading'>Reading</option>
                      <option value='study'>Study</option>
                      <option value='quiz'>Quiz</option>
                      <option value='test'>Test</option>
                      <option value='project'>Project</option>
                      <option value='extra-credit'>Extra-Credit</option>
                      <option value='lab'>Lab</option>
                    </select>
                  </div>
                </div>

                <button class='btn btn-info my-4 btn-block' type='submit'>
                  Make New Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Link to='/login/teacher'> Login</Link>

      <Link to='/'> Home</Link>
    </Fragment>
  );
};

export default TeacherAssignments;
