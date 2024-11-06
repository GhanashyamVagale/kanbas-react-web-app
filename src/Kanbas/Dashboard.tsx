<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  enrollCourse,
  unenrollAllFromCourse,
  unenrollCourse,
} from "./Courses/reducer";
import ProtectedRoute from "./Account/ProtectedRoute";
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollmentStatus } from "./enrollmentReducer"; 
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
<<<<<<< HEAD
  addNewCourse: (uniqueId: string) => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const setCourseList = () => {
    setShowAllCourses((prev) => !prev);
  };

  const enrolledCourses = enrollments
    .filter((enrollment: any) => enrollment.user === currentUser._id)
    .map((enrollment: any) => enrollment.course);

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleAddNewCourse = () => {
    const uniqueId = new Date().getTime().toString();
    addNewCourse(uniqueId);
    handleEnroll(uniqueId);
=======
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state:any) => state.enrollmentReducer.enrollments);
  // toggle between showing all courses and only enrolled courses 
  // shows only enrolled courses first
  const [showCourses, setShowCourses] = useState(false);

  // handles showing all courses or only enrolled courses
  const toggleCourses = () => {
    // switch between all or enrolled courses
    setShowCourses(!showCourses);
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
  };

  return (
    <div id="wd-dashboard">
<<<<<<< HEAD
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <span>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            placeholder="Course Name"
=======
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course</h5>
          <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>

          <input
            value={course.name}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
<<<<<<< HEAD
            placeholder="Course Description"
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </span>
      )}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          {showAllCourses
            ? "Published Courses (" + courses.length + ")"
            : "Enrolled Courses (" + enrolledCourses.length + ")"}
        </h2>
        {currentUser.role === "STUDENT" && (
          <button className="btn btn-primary" onClick={setCourseList}>
            {showAllCourses ? "Show Enrolled Courses" : "Show All Course"}
          </button>
        )}
      </div>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5">
          {courses.map((course) => {
            const isEnrolled = enrolledCourses.includes(course._id);
            if (showAllCourses || isEnrolled) {
              return (
                <div
                  key={course._id}
                  className="wd-dashboard-course col mb-3 mt-3"
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <ProtectedRoute>
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to={`/Kanbas/Courses/${course._id}/Home`}
                      >
                        <img
                          style={{ objectFit: "contain" }}
                          src={`/images/${course.img}`}
                          width="100%"
                          height={160}
                        />
                        <div className="card-body">
                          <h5 className="wd-dashboard-course-title card-title">
                            {course.name}
                          </h5>

                          <p
                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                            style={{ maxHeight: 100 }}
                          >
                            {course.description}
                          </p>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <button className="btn btn-primary"> Go </button>
                            {currentUser.role === "STUDENT" && (
                              <span>
                                {isEnrolled ? (
                                  <button
                                    className="btn btn-danger me-2"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleUnenroll(course._id);
                                    }}
                                  >
                                    Unenroll
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-success me-2"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleEnroll(course._id);
                                    }}
                                  >
                                    Enroll
                                  </button>
                                )}
                              </span>
                            )}
                            {currentUser.role === "FACULTY" && (
                              <span>
                                <button
                                  onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                    dispatch(unenrollAllFromCourse(course._id));
                                  }}
                                  className="btn btn-danger float-end"
                                  id="wd-delete-course-click"
                                >
                                  Delete
                                </button>
                                <button
                                  id="wd-edit-course-click"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                  }}
                                  className="btn btn-warning me-2 float-end"
                                >
                                  Edit
                                </button>
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </ProtectedRoute>
                  </div>
                </div>
              );
            }
          })}
=======
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      {currentUser.role === "STUDENT" && (
        // switch between all or enrolled courses when the button is clicked 
        <button className="btn btn-primary mb-2" 
        onClick={toggleCourses}>
          {showCourses ? "Enrolled Courses" : "All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {

              if (currentUser.role === "STUDENT") {

                // return all courses if showCourses is true 
                if (showCourses) {
                  return true;
                }
                else {
                  // checks if the user is enrolled in the course
                return enrollments.some(
                  (enrollment: { user: any; course: any }) =>
                    enrollment.user === currentUser._id && enrollment.course === course._id
                )};
              }
              // shows all courses for roles other than student 
              else {
              return true;
              }
            })

            .map((course) => {
              const isEnrolled = enrollments.some(
                (enrollment: { user: any; course: any }) =>
                  enrollment.user === currentUser._id && enrollment.course === course._id
              );

              return (
                <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <img src="/images/reactjs.jpg" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description}
                        </p>
                        <button className="btn btn-primary">Go</button>

                        {currentUser.role === "STUDENT" && (
                            // if the user is enrolled, show the unenroll button 
                            isEnrolled ? (
                              <button
                                onClick={(event) => {
                                  // prevent the user from clicking on the course itself 
                                  event.preventDefault();
                                  // use the enrollmentStatus action using the user and 
                                  dispatch(enrollmentStatus({ userId: currentUser._id, courseId: course._id }));
                                }}
                                className="btn btn-danger float-end"
                              > Unenroll
                              </button>) 
                              // otherwise, show the enroll button 
                              : (<button
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(enrollmentStatus({ userId: currentUser._id, courseId: course._id }));
                                }}
                                className="btn btn-success float-end"
                              >
                                Enroll
                              </button>
                            )
                          )}

                        {currentUser.role === "FACULTY" && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>

                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
        </div>
      </div>
    </div>
  );
}
