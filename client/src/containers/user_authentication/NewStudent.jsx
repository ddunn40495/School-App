import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { studentRegister } from "../../apis/url";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Input,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

const NewStudent = ({ toogleAuth }) => {
  /* State */
  const [inputs, setInputs] = useState({
    student_first_name: "",
    student_last_name: "",
    student_user_name: "",
    student_password: "",
    student_email: "",
    student_grade_level: "",
  });

  const {
    student_first_name,
    student_last_name,
    student_user_name,
    student_password,
    student_email,
    student_grade_level,
  } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const body = {
        student_first_name,
        student_last_name,
        student_user_name,
        student_password,
        student_email,
        student_grade_level,
      };
      const res = await fetch(studentRegister, {
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
      <h1 className='form-control'>Student Register</h1>
      <form>
        <InputLabel>First Name</InputLabel>
        <Input
          type='text'
          name='student_first_name'
          value={student_first_name}
          placeholder='First Name'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Last Name</InputLabel>
        <Input
          type='text'
          name='student_last_name'
          value={student_last_name}
          placeholder='Last Name'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Username</InputLabel>
        <Input
          type='text'
          name='student_user_name'
          value={student_user_name}
          placeholder='Username'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Password</InputLabel>
        <Input
          type='password'
          name='student_password'
          value={student_password}
          placeholder='Password'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel>Email</InputLabel>
        <Input
          type='text'
          name='student_email'
          value={student_email}
          placeholder='Email'
          onChange={(event) => onChange(event)}
          className='form-control'
        />
        <InputLabel id='grade'>Grade</InputLabel>
        <Select
          labelId='grade'
          name='student_grade_level'
          value={student_grade_level}
          onChange={(event) => onChange(event)}
        >
          <MenuItem value='freshman'>Freshman</MenuItem>
          <MenuItem value='sophomore'>Sophomore</MenuItem>
          <MenuItem value='junior'>Junior</MenuItem>
          <MenuItem value='senior'>Senior</MenuItem>
        </Select>

        <Button onClick={submitForm} class='btn btn-block'>
          Submit
        </Button>
      </form>
      <Link to='/login/student'>
        {" "}
        <button type='button' class='btn btn-primary btn-lg ml-1'>
          Student Login
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

export default NewStudent;
