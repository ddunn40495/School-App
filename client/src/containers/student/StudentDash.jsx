import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { dashboard } from "../../apis/url";

const StudentDash = ({ toogleAuth }) => {
  /* State */
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");

  /* Get Student info that will be rendered on the dashboard */

  const getStudentInfo = async () => {
    try {
      const res = await fetch(dashboard, {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const response = await res.json();
      console.log(response);
      console.log(dashboard);
      setFirstName(response.first_name);
      setLastName(response.last_name);
      setUsername(response.username);
      setEmail(response.email);
      setYear(response.year);
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  /* Student Logout  */

  const logout = async (event) => {
    event.preventDefault();
    try {
      localStorage.removeItem("token");
      toogleAuth(false);
      toast.success("Successfully Logged Out");
    } catch (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("200 Success");
      }
    }
  };

  useEffect(() => {
    getStudentInfo();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{first_name}</h2>
      <h2>{last_name}</h2>
      <h2>{username}</h2>
      <h2>{email}</h2>
      <h2>{year}</h2>
      <button onClick={(event) => logout(event)}>Logout</button>
    </div>
  );
};

export default StudentDash;
