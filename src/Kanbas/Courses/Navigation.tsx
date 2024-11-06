import { Link, useLocation, useParams } from "react-router-dom";
<<<<<<< HEAD

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 me-2"
    >
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item border border-0
              ${pathname.includes(link.label) ? "active" : "text-danger"}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
=======
export default function CoursesNavigation() {
  const {cid} = useParams();
  const { pathname } = useLocation();
  const links = [
    { name: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { name: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { name: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { name: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { name: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { name: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { name: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { name: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item border border-0 
          ${pathname.includes(link.path) ? "active text-black bg-white" : "text-danger bg-white"}`}>
          {link.name}
        </Link>
      ))}
    </div>);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
