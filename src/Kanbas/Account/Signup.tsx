import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
<<<<<<< HEAD
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Signup
      </Link>
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signin"
        className="btn btn-primary w-100"
      >
        Signin
      </Link>
    </div>
  );
}
=======
      <input placeholder="username" className="form-control mb-2"/>
      <input placeholder="password" type="password" className="form-control mb-2" />
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100" > Sign up </Link><br />
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
