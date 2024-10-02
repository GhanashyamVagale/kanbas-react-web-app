import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value="GhanashyamVagale"
        type="text"
        placeholder="Username"
      /><br />
      <input
        id="wd-password"
        value="123"
        type="password"
        placeholder="Password"
      /><br />
      <input
        id="wd-firstname"
        value="Ghanashyam"
        type="text"
        placeholder="First Name"
      /><br />
      <input
        id="wd-lastname"
        value="Vagale"
        type="text"
        placeholder="Last Name"
      /><br />
      <input
        id="wd-dob"
        value="2001-12-30"
        type="date"
      /><br />
      <input
        id="wd-email"
        value="vagalesrinivas.g@northeastern.edu"
        type="email"
        placeholder="your.email@example.com"
      /><br />
      <select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br />
      <Link to="/Kanbas/Account/Signin">Sign out</Link>
    </div>
  );
};

export default Profile;
