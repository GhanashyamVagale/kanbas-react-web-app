<<<<<<< HEAD
import { Navigate, Route, Routes } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

=======
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { useSelector } from "react-redux";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
<<<<<<< HEAD
              <Route
                path="/"
                element={
                  <Navigate
                    to={
                      currentUser
                        ? "/Kanbas/Account/Profile"
                        : "/Kanbas/Account/Signin"
                    }
                  />
                }
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
=======
            <Route path="/" element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>}/>
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
            </Routes>
          </td>
        </tr>
      </table>
    </div>
<<<<<<< HEAD
  );
}
=======
);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
