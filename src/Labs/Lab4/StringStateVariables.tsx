import React, { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        defaultValue={firstName}
<<<<<<< HEAD
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr />
    </div>
  );
}
=======
        onChange={(e) => setFirstName(e.target.value)}/>
<hr/></div>);}

>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
