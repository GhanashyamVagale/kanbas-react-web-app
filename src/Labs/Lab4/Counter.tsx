import React, { useState } from "react";
export default function Counter() {
<<<<<<< HEAD
  const [count, setCount] = useState(0);
=======
  //let count = 7;
  const [count, setCount] = useState(7);
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
<<<<<<< HEAD
        className="btn btn-success"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
=======
        onClick={() =>setCount(count + 1) }
        id="wd-counter-up-click">
        Up
      </button>
      <button
        onClick={() =>  setCount(count - 1 ) }
        id="wd-counter-down-click">
        Down
      </button>
<hr/></div>);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
