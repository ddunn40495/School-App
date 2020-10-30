import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { teacherLogin } from "../../apis/url";

const TeacherLogin = ({ toogleAuth }) => {
  /* State */
  const [inputs, setInputs] = useState({
    teacher_user_name: "",
    teacher_password: "",
  });
  const { teacher_user_name, teacher_password } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { teacher_user_name, teacher_password };
      const res = await fetch(teacherLogin, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();
      console.log(teacherLogin);
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
      <h1 className='form-control'> Teacher Login</h1>
      <form onSubmit={submitForm}>
        <input
          type='text'
          name='teacher_user_name'
          value={teacher_user_name}
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <input
          type='password'
          name='teacher_password'
          value={teacher_password}
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <button class='btn btn-block'>Submit</button>
      </form>
      <Link to='/new/teacher'>
        <button type='button' class='btn btn-primary btn-lg ml-1'>
          New Teacher
        </button>
      </Link>
      <Link to='/'>
        {" "}
        <button type='button' class='btn btn-primary btn-lg ml-1'>
          Home
        </button>
      </Link>
    </Fragment>
  );
};

export default TeacherLogin;
