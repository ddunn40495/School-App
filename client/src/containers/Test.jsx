import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { log } from "../apis/url";

const Testdb = () => {
  const consoleLog = async () => {
    try {
      const res = await fetch(log, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response);
      console.log(log);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  useEffect(() => {
    consoleLog();
  }, []);
  return (
    <div>
      <h1>lol</h1>
      <a href='http://localhost:3000/new/teacher'>New Teacher</a>
      <a href='http://localhost:3000/login/teacher'>Teacher Login</a>
      <a href='http://localhost:3000/new/student'> New Student</a>
      <a href='http://localhost:3000/login/student'>Student Login</a>
    </div>
  );
};

export default Testdb;