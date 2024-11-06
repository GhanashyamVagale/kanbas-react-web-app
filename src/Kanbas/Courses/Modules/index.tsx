<<<<<<< HEAD
import React, { useState } from "react";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
=======
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons"
import LessonControlButtons from "./LessonControlButtons";
import WeekGreenCheckmark from "./WeekGreenCheckmark";
import WeekEllipsisVertical from "./WeekEllipsisVertical";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer"
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
<<<<<<< HEAD
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="me-3">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
=======
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch()
  return (

>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
      <ul id="wd-modules" className="list-group rounded-0">
        {currentUser.role === "FACULTY" && (
         <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} />
      )}

        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
<<<<<<< HEAD
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="d-flex align-items-center justify-content-between wd-title p-3 ps-2 bg-secondary">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
=======
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              { module.editing && (
                <input className="form-control w-50 d-inline-block"
                      onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
<<<<<<< HEAD
                      defaultValue={module.name}
                    />
                  )}
                </div>
                {currentUser.role === "FACULTY" && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => {
                      dispatch(deleteModule(moduleId));
                    }}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.link && (
                          <IoIosLink className="me-2 fs-3 text-success" />
                        )}
                        <span
                          className={`${
                            lesson.link ? "text-danger" : "text-black"
                          } ${lesson.submodule ? "ms-4" : ""}`}
                        >
                          {lesson.name}
                        </span>
                        {currentUser.role === "FACULTY" && (
                          <span className="ms-auto">
                            <LessonControlButtons />
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
=======
                      defaultValue={module.name}/>
            )}
            <WeekEllipsisVertical /> 

            {currentUser.role === "FACULTY" && (
            <ModuleControlButtons  
            moduleId={module._id}
            deleteModule={(moduleId) => {
              dispatch(deleteModule(moduleId));
            }}
            editModule={(moduleId) => dispatch(editModule(moduleId))} />
          )}

            <WeekGreenCheckmark />
            </div>
              {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> 
                    {lesson.name} 
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a