import Courses from "..";
import Modules from "../Modules";
import CourseStatus from "./Status";
<<<<<<< HEAD
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-1">
        <Modules />
      </div>
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>
=======
import { useSelector } from "react-redux";
export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
 
<div className="d-flex" id="wd-home">
  <div className="flex-fill">
    <Modules />
  </div>
  <div className="d-none d-md-block">
  {currentUser.role === "FACULTY" && <CourseStatus />}
  </div>
</div>
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
  );
}
