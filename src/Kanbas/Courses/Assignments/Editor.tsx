<<<<<<< HEAD
import "../../styles.css";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const initialAssignment =
    aid !== "NewAssignment"
      ? assignments.find((assignment: any) => assignment._id === aid)
      : {
          title: "",
          description: "",
          points: "",
          assignmentGroup: "ASSIGNMENTS",
          gradeAs: "PERCENTAGE",
          submissionType: "ONLINE",
          onlineEntryOptions: [
            { id: "wd-text-entry", label: "Text Entry" },
            { id: "wd-website-url", label: "Website URL" },
            { id: "wd-media-recordings", label: "Media Recordings" },
            { id: "wd-student-annotation", label: "Student Annotation" },
            { id: "wd-file-upload", label: "File Uploads" },
          ],
          dueDate: "",
          availableFrom: "",
          availableUntil: "",
        };

  const [assignment, setAssignment] = useState(initialAssignment);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (aid !== "NewAssignment") {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="me-3">
      <form onSubmit={handleSave}>
        <label htmlFor="wd-name" className="mb-3">
          <b>Assignment Name</b>
        </label>
        <div className="row mb-3">
          <div className="col-sm-12">
            <input
              className="form-control"
              id="wd-name"
              placeholder="Assignment Title"
              value={assignment.title}
              onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
              }
              required
              readOnly={currentUser.role !== "FACULTY"}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-12">
            <textarea
              value={assignment.description}
              placeholder="Assignment Description"
              onChange={(e) =>
                setAssignment({ ...assignment, description: e.target.value })
              }
              className="form-control"
              id="wd-description"
              rows={10}
              required
              readOnly={currentUser.role !== "FACULTY"}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            <span className="float-end">Points</span>
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="wd-points"
              value={assignment.points}
              placeholder="Points"
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
              min="1"
              required
              readOnly={currentUser.role !== "FACULTY"}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">
            <span className="float-end">Assignment Group</span>
          </label>
          <div className="col-sm-10">
            <select
              id="wd-group"
              className="form-select"
              disabled={currentUser.role !== "FACULTY"}
            >
              <option value="ASSIGNMENTS">{assignment.assignmentGroup}</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label"
          >
            <span className="float-end">Display Grade as</span>
          </label>
          <div className="col-sm-10">
            <select
              id="wd-display-grade-as"
              className="form-select"
              disabled={currentUser.role !== "FACULTY"}
            >
              <option value="PERCENTAGE">{assignment.gradeAs}</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label"
          >
            <span className="float-end">Submission Type</span>
          </label>
          <div className="col-sm-10">
            <div className="border border-gray rounded">
              <div className="ms-3 me-3">
                <div className="pt-3 pb-3">
                  <select
                    id="wd-submission-type"
                    className="form-select"
                    disabled={currentUser.role !== "FACULTY"}
                  >
                    <option value="Online">{assignment.submissionType}</option>
                  </select>
                </div>
                <b>Online Entry Options</b>
                <div className="pt-2">
                  {assignment.onlineEntryOptions.map(
                    (option: { id: string; label: string }) => (
                      <div className="form-check pb-3" key={option.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={option.id}
                          disabled={currentUser.role !== "FACULTY"}
                        />
                        <label className="form-check-label" htmlFor={option.id}>
                          {option.label}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
            <span className="float-end">Assign</span>
          </label>
          <div className="col-sm-10">
            <div className="border border-gray rounded">
              <div className="ms-3 me-3 mt-3 mb-3">
                <label htmlFor="wd-assign-to" className="form-label">
                  <b>Assign to</b>
                </label>
                <div className="d-flex align-items-center border border-gray rounded">
                  <span className="border border-gray bg-light rounded p-2 m-2">
                    Everyone X
                  </span>
                </div>
                <label htmlFor="wd-due-date" className="form-label">
                  <b>Due</b>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="datetime-local"
                    id="wd-due-date"
                    className="form-control"
                    value={`${assignment.dueDate}`}
                    onChange={(e) =>
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    }
                    required
                    readOnly={currentUser.role !== "FACULTY"}
                  />
                </div>

                <div className="row mb-3 d-flex">
                  <div className="col-sm-6">
                    <label htmlFor="wd-available-from" className="form-label">
                      <b>Available from</b>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        id="wd-available-from"
                        type="datetime-local"
                        className="form-control"
                        value={`${assignment.availableFrom}`}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            availableFrom: e.target.value,
                          })
                        }
                        required
                        readOnly={currentUser.role !== "FACULTY"}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="wd-available-until" className="form-label">
                      <b>Until</b>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        id="wd-available-until"
                        type="datetime-local"
                        className="form-control"
                        value={`${assignment.availableUntil}`}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            availableUntil: e.target.value,
                          })
                        }
                        required
                        readOnly={currentUser.role !== "FACULTY"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {currentUser.role === "FACULTY" && (
          <div className="row mb-3 d-flex justify-content-between float-end">
            <div>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button
                  id="wd-edit-assignment-cancel"
                  className="btn btn-secondary btn-outline-secondary me-1"
                  type="button"
                >
                  Cancel
                </button>
              </Link>
              <button
                id="wd-edit-assignment-save"
                className="btn btn-danger me-1"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
=======
import { useNavigate, Link, useParams, Navigate } from "react-router-dom";
import {  useState, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigateBack = useNavigate();

    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const assignment = assignments.find((a: any) => a._id === aid);

    const[title, setTitle] = useState("");
    const[available_date, setAvailable_date] = useState("");
    const[available_until, setAvailable_until] = useState( "");
    const[due_date, setDue_date] = useState("");
    const[points, setPoints] = useState("");
    const[description, setDescription] = useState("");

    // look up if assignment exists, if it does then populate fields with assignment details
    useEffect(() => {
      if (assignment) {
          setTitle(assignment.title);
          setAvailable_date(assignment.available_date);
          setAvailable_until(assignment.available_until);
          setDue_date(assignment.due_date);
          setPoints(assignment.points);
          setDescription(assignment.description);
      }}, [assignment]);

    const addOrEditAssignment = () => {
      // creating a new assignment 
      if (aid === "new"){
        const newAssignment = {
          _id: new Date().getTime().toString(), 
          title,
          course: cid,
          available_date,
          available_until,
          due_date,
          points,
          description,
        };
        dispatch(addAssignment(newAssignment))
      }
      else {
        // editing an existing assignment
        const editedAssignment = {
          _id: aid, 
          title,
          course: cid,
          available_date,
          available_until,
          due_date,
          points,
          description,
        };
        dispatch(updateAssignment(editedAssignment))
      }
      navigateBack(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return ( 
    <div id="assignment-editor">   
    <div className="mb-4">
       
    <label htmlFor="assignment-name" className="form-label col-form-label">
      Assignment Name</label>     
    <input 
    type="name" 
    className="form-control"
    id="assignment-name" 
    placeholder={assignment?.title}
    value = {title}
    onChange={(e) => setTitle(e.target.value)}/>     
    </div>

    <div className="mb-4">
    <textarea 
    className="form-control" 
    id="text-area"
    placeholder={assignment?.description}
    rows={13}
    value = {description}
    onChange={(e) => setDescription(e.target.value)}>
    </textarea>
    </div>

    <div className="mb-3">
    <div className="row align-items-center">
    <label htmlFor="points" 
    className="col-sm-3 col-form-label">
      Points
    </label>
    <div className="col-sm-9">
      <input 
      type="text" 
      className="form-control" 
      id="points" 
      placeholder={assignment?.points} 
      value = {points}
      onChange={(e) => setPoints(e.target.value)}/>
    </div>
  </div> 
  </div> 
  
    <div className="row align-items-center mb-3">
    <label htmlFor="assignment-group" className="col-sm-3 col-form-label">
      Assignment Group
    </label>
    <div className="col-sm-9">
      <select id="assignment-group" className="form-select">
        <option value="">ASSIGNMENTS</option>
        <option value="group1">Group 1</option>
        <option value="group2">Group 2</option>
        <option value="group3">Group 3</option>
      </select>

    </div>
  </div>

<div className="mb-3">
  <div className="row align-items-center">
    <label htmlFor="display-grade" className="col-sm-3 col-form-label">
      Display Grade as
    </label>
    <div className="col-sm-9">
      <select id="display-grade" className="form-select">
        <option value="">Percentage</option>
        <option value="group1">Group 1</option>
        <option value="group2">Group 2</option>
        <option value="group3">Group 3</option>
      </select>
    </div>
  </div>
</div>

<div className="mb-3">
  <div className="row">
    <label htmlFor="submission-type" className="col-sm-3 col-form-label">
      Submission Type
    </label>

    <div className="col-sm-9">
      <div className="border border-1 p-3">
        <select id="submission-type" className="form-select mb-3">
          <option value="">Online</option>
          <option value="group1">Group 1</option>
          <option value="group2">Group 2</option>
          <option value="group3">Group 3</option>
        </select>

        <label htmlFor="online-entry-options" className="col-sm-3 mb-3 fw-bold col-form-label">
        Online Entry Options
        </label>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="text-entry" />
          <label className="form-check-label" htmlFor="text-entry">
             Text Entry
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="website-url" defaultChecked />
          <label className="form-check-label" htmlFor="website-url">
             Website URL
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="media-recordings" />
          <label className="form-check-label" htmlFor="media-recordings">
             Media Recordings
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="student-annotation" />
          <label className="form-check-label" htmlFor="student-annotation">
             Student Annotation
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="file-upload" />
          <label className="form-check-label" htmlFor="file-upload">
             File Uploads
          </label>
        </div>
        
      </div>
    </div>
  </div>
</div>

<div className="mb-5">
  <div className="row align-items-start">
    <label htmlFor="assign" className="col-sm-3">
      Assign
    </label>

    <div className="col-sm-9">
      <div className="border border-1 p-3">
    
        <label htmlFor="assign-to" className="col-sm-3 col-form-label fw-bold fs-5">
        Assign to
        </label>

        <div className="border border-1 p-1">
       <div className="border border-secondary bg-secondary d-flex justify-content-between" style={{ width: '10rem', padding: '0.5rem' }}>
      <p className="mb-0">Everyone</p>
      <button className="btn btn-close"></button>
      </div>
      </div>

      <label htmlFor="due" className="col-sm-3 col-form-label fw-bold fs-5">
        Due
      </label>
      <div className="mb-3">  
        <input 
        type="text" 
        className="form-control" 
        id="due-date" 
        placeholder = {assignment?.due_date}
        value = {due_date}
        onChange={(e) => setDue_date(e.target.value)} />
      </div>

      <div className="mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="available-from" className="form-label fw-bold fs-5">
          Available From</label>
          <input 
          type="text" 
          className="form-control" 
          id="available-from"
          placeholder={assignment?.available_date}
          value = {available_date}
          onChange={(e) => setAvailable_date(e.target.value)}
            />
        </div>
        <div className="col-sm-6">
          <label htmlFor="until-date" className="form-label fw-bold fs-5">
            Until</label>
          <input 
          type="date" 
          className="form-control" 
          id="until-date"
          value = {available_until}
          onChange={(e) => setAvailable_until(e.target.value)}
          />
        </div>
      </div>
    </div>  
      </div>
    </div>
  </div>
</div>

<div className="border border-1 "></div>
<div className="d-flex justify-content-end p-3">
  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
      <button type="button" className="btn btn-secondary me-2">
        Cancel
      </button>
  </Link>
      <button 
      type="button" 
      className="btn btn-danger"
      onClick={addOrEditAssignment}
      >
      Save
      </button>
    </div>   
</div>
  );}
  
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
