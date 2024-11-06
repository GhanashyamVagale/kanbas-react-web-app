import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
<<<<<<< HEAD
      <button className="btn btn-success mb-2" onClick={addElement}>
        Add Element
      </button>
      <ul className="list-group w-25">
        {array.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {item}
            <button
              className="btn btn-danger"
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
            >
              Delete
            </button>
=======
      <button onClick={addElement} className= "btn btn-success">Add Element</button>
      <ul className="list-group mt-2">
        {array.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click" className="btn btn-danger float-end">
              Delete</button>
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
