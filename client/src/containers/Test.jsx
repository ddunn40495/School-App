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
    </div>
  );
};

export default Testdb;
