import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Input,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

import { toast } from "react-toastify";
import { newCourse } from "../../apis/url";
import TeacherNav from "../../components/TeacherNav";
import TeacherSideNav from "../../components/TeacherSideNav";
import TeacherHome from "./TeacherHome";

const TeacherClasses = (props) => {
  /* State */
  const [allClasses, setAllClasses] = useState("");
  const [myClasses, setLastName] = useState("");

  const [inputs, setInputs] = useState({
    course_name: "",
    department_id: "",
  });

  const { course_name, department_id } = inputs;

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const body = {
        course_name,
        department_id,
      };
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
  return (
    <Fragment>
      <Fragment>
        <h1 className='form-control'>New Course</h1>
        <form>
          <InputLabel>Course Name</InputLabel>
          <Input
            type='text'
            name='course_name'
            value={course_name}
            placeholder='Course Name'
            onChange={(event) => onChange(event)}
            className='form-control'
          />
          <InputLabel id='department'>Department</InputLabel>
          <Select
            labelId='department'
            name='department_id'
            value={department_id}
            onChange={(event) => onChange(event)}
          >
            <MenuItem value='1'>Math</MenuItem>
            {/* <MenuItem value='sophomore'>Sophomore</MenuItem>
            <MenuItem value='junior'>Junior</MenuItem>
            <MenuItem value='senior'>Senior</MenuItem> */}
          </Select>

          <Button onClick={submitForm} class='btn btn-block'>
            Submit
          </Button>
        </form>
        <Link to='/login/teacher'> Login</Link>

        <Link to='/'> Home</Link>
      </Fragment>
    </Fragment>
  );
};

export default TeacherClasses;
