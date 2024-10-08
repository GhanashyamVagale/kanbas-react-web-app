import { Link } from "react-router-dom";

const AccountNavigation = () => {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-5">
      <Link
        to={"/Kanbas/Account/Signin"}
        className="list-group-item active border border-0"
      >
        Sign in
      </Link>
      <Link
        to={"/Kanbas/Account/Signup"}
        className="list-group-item text-danger border border-0"
      >
        Sign up
      </Link>
      <Link
        to={"/Kanbas/Account/Profile"}
        className="list-group-item text-danger border border-0"
      >
        Profile
      </Link>
    </div>
  );
};

export default AccountNavigation;
