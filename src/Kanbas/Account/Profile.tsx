import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div id="wd-profile-screen" style={{ width: "400px" }}>
      <h1>Profile</h1>
      <input
        id="wd-username"
        defaultValue="GhanashyamVagale"
        type="text"
        placeholder="Username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        defaultValue="Gvs.2001"
        type="password"
        placeholder="Password"
        className="form-control mb-2"
      />
      <input
        id="wd-firstname"
        defaultValue="Ghanashyam"
        type="text"
        placeholder="First Name"
        className="form-control mb-2"
      />
      <input
        id="wd-lastname"
        defaultValue="Vagale"
        type="text"
        placeholder="Last Name"
        className="form-control mb-2"
      />
      <input
        id="wd-dob"
        defaultValue="2001-12-30"
        type="date"
        className="form-control mb-2"
      />
      <input
        id="wd-email"
        defaultValue="vagalesrinivas.g@northeastern.edu"
        type="email"
        placeholder="your.email@example.com"
        className="form-control mb-2"
      />
      <select id="wd-role" className="form-select mb-2" defaultValue="USER">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Sign out
      </Link>
    </div>
  );
};

export default Profile;