import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <input id="wd-username" placeholder="username" type="text" /><br />
      <input id="wd-password" placeholder="password" type="password" /><br />
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Dashboard"
      >
        Sign in
      </Link><br />
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
      >
        Sign up
      </Link>
    </div>
  );
};

export default Signin;