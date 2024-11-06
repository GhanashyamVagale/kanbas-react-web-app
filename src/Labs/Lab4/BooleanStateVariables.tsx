import React, { useState } from "react";
export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="form-control">
<<<<<<< HEAD
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />{" "}
        Done
      </label>
      {done && <div className="alert alert-success">Yay! you are done</div>}
      <hr />
    </div>
  );
}
=======
        <input type="checkbox" checked={done}
               onChange={() => setDone(!done)} /> Done
      </label>
      {done && <div className="alert alert-success">
               Yay! you are done</div>}
<hr/></div>);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
