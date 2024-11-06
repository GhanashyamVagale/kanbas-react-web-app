import { BsGripVertical } from "react-icons/bs";
<<<<<<< HEAD
import AssignmentSearch from "./AssignmentSearch";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import DeleteDialog from "./DeleteDialog";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const handleDelete = (assignmentId: any) => {
    dispatch(deleteAssignment(assignmentId));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };
  return (
    <div className="me-3">
      <AssignmentSearch />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5">
          <div className="d-flex align-items-center justify-content-between wd-assignments-title p-3 ps-2 bg-secondary">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <RiArrowDownSFill className="me-2" />
              <b>ASSIGNMENTS</b>{" "}
            </div>
            {currentUser.role === "FACULTY" && <AssignmentControlButtons />}
          </div>
          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-assignment-list-item list-group-item p-3 ps-2">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-3 text-success" />
                    <span>
                      <a
                        className="wd-assignment-link text-dark text-decoration-none fw-bold"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                      <br />
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not available until</b>{" "}
                      {formatDate(assignment.availableFrom)} | <b>Due</b>{" "}
                      {formatDate(assignment.dueDate)} | {assignment.points} pts
                    </span>
                    {currentUser.role === "FACULTY" && (
                      <span className="d-flex ms-auto">
                        <FaTrash
                          data-bs-toggle="modal"
                          data-bs-target="#wd-delete-assignment-dialog"
                          className="text-danger me-2 mb-1"
                        />
                        <DeleteDialog
                          handleDelete={() => handleDelete(assignment._id)}
                        />
                        <LessonControlButtons />
                      </span>
                    )}
                  </div>
                </li>
              ))}
          </ul>
=======
import { GiNotebook } from "react-icons/gi";
import GreenCheckmarkAndEllipsisVertical from "./GreenCheckMarkAndEllipsisVertical";
import { GoTriangleDown } from "react-icons/go";
import AssignmentButtons from "./AssignmentButtons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  
    return (

      <ul id="wd-assignments">
        {assignments
        .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
        <li className = "wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-1 fs-3" />
            <GoTriangleDown className="me-2" />
            <span className="fs-3">ASSIGNMENTS</span>
          </div>
          {currentUser.role === "FACULTY" && (
          <AssignmentButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => {dispatch(deleteAssignment(assignmentId))}} />
      
          )}
        </div>

        <ul className="wd-lessons list-group rounded-0">

        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <GiNotebook className="me-4 fs-3"/>
        <div>
    
        <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
        <a className="text-bold fs-3"> 
          {assignment.title}       
        </a>
        </Link>
        <div className="mb-1 fs-6">
          <span className="text-danger">
            Multiple Modules<b></b>
            </span>
          <span className = "ms-2">|</span>
          <span className = "fw-bold ms-2 fs-">Not available until</span>
          
          <span className = "ms-1">{assignment.available_date} |</span> 
              
        </div>
        <div className="mb-1 fs-6 fw-bold">
        Due
        <span className = "ms-1 fw-normal">{assignment.due_date}  |  {assignment.points} pts</span>
        </div>
        </div>
        <GreenCheckmarkAndEllipsisVertical />
          </li>
        </ul>
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
        </li>
        ))}
      </ul>
<<<<<<< HEAD
    </div>
  );
}
=======
  );}
  
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
