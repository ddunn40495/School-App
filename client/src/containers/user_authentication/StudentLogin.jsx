import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { studentLogin } from "../../apis/url";

const StudentLogin = ({ toogleAuth }) => {
  /* State */
  const [inputs, setInputs] = useState({
    student_user_name: "",
    student_password: "",
  });
  const { student_user_name, student_password } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { student_user_name, student_password };
      const res = await fetch(studentLogin, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();

      if (response.token) {
        localStorage.setItem("token", response.token);
        toogleAuth(true);
        toast.success("Logged in Successfully");
      } else {
        toogleAuth(false);
        toast.error(response);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <h1 className='form-control'> Student Login</h1>
      <form onSubmit={submitForm}>
        <input
          type='text'
          name='student_user_name'
          value={student_user_name}
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <input
          type='password'
          name='student_password'
          value={student_password}
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <button class='btn btn-block'>Submit</button>
      </form>
      <a href='http://localhost:3000/new/student'> New Student</a>
      <a href='http://localhost:3000/'>Home</a>
    </Fragment>
  );
};

export default StudentLogin;
