import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const StudentLogin = ({ toogleAuth }) => {
  /* State */
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { username, password };
      const res = await fetch("http://localhost:4000/auth/login/student", {
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
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };
  return (
    <Fragment>
      <h1 className='form-control'>Login</h1>
      <form onSubmit={submitForm}>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <button class='btn btn-block'>Submit</button>
      </form>
      {/* <Link to="/register">register</Link> */}
    </Fragment>
  );
};

export default StudentLogin;
