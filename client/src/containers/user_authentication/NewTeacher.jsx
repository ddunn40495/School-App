import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { teacherRegister } from "../../apis/url";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

const NewTeacher = ({ toogleAuth }) => {
  /* State */
  const [inputs, setInputs] = useState({
    teacher_first_name: "",
    teacher_last_name: "",
    teacher_user_name: "",
    teacher_password: "",
    teacher_email: "",
  });

  const {
    teacher_first_name,
    teacher_last_name,
    teacher_user_name,
    teacher_password,
    teacher_email,
  } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const body = {
        teacher_first_name,
        teacher_last_name,
        teacher_user_name,
        teacher_password,
        teacher_email,
      };
      const res = await fetch(teacherRegister, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();
      console.log(teacherRegister);
      if (response.token) {
        localStorage.setItem("token", response.token);
        toogleAuth(true);
        toast.success("Account Created Successfully");
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
      <h1 className='form-control'>Teacher Register</h1>
      <form>
        <InputLabel>First Name</InputLabel>
        <Input
          type='text'
          name='teacher_first_name'
          value={teacher_first_name}
          placeholder='First Name'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Last Name</InputLabel>
        <Input
          type='text'
          name='teacher_last_name'
          value={teacher_last_name}
          placeholder='Last Name'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Username</InputLabel>
        <Input
          type='text'
          name='teacher_user_name'
          value={teacher_user_name}
          placeholder='Username'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Password</InputLabel>
        <Input
          type='password'
          name='teacher_password'
          value={teacher_password}
          placeholder='Password'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Email</InputLabel>
        <Input
          type='text'
          name='teacher_email'
          value={teacher_email}
          placeholder='Email'
          onChange={(event) => onChange(event)}
          className='form-control'
        />

        <Button onClick={submitForm} class='btn btn-block'>
          Submit
        </Button>
      </form>
      <Link to='/login/teacher'>
        {" "}
        <button type='button' class='btn btn-primary btn-lg ml-1'>
          Teacher Login
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

export default NewTeacher;
