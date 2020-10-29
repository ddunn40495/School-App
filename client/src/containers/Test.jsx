import React, { Fragment, useEffect, useState } from "react";
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
    <Fragment>
      <nav class='navbar navbar-expand-lg navbar-dark indigo'>
        <a class='navbar-brand' href='#'>
          Navbar w/ text
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <div class='navbar-toggler-icon'></div>
        </button>
        <div class='collapse navbar-collapse' id='navbarText'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Home
                <div class='sr-only'>(current)</div>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Features
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Pricing
              </a>
            </li>
          </ul>
          <div class='navbar-text white-text'>
            Navbar text with an inline element
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Testdb;
