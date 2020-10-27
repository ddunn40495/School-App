//=======================================
//
//         TEACHER VALIDATION MIDDLEWARE
//
// =======================================

/* This middleware checks to see if the email username and passwords are vaild when the user is making an account or login in */

module.exports = (req, res, next) => {
  const { email, username, password } = req.body;

  const isEmailValid = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  const isUsernameValid = (username) => {
    if (!username) {
      return false;
    }
    return true;
  };

  if (req.path === "/register/teacher") {
    console.log(!email.length);
    if (![email, username, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!isEmailValid(email)) {
      return res.json("Invalid Email");
    }
  } else if (req.path === "/login/teacher") {
    if (![username, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!isUsernameValid(username)) {
      res.json("Invalid Username");
    }
  }

  next();
};
