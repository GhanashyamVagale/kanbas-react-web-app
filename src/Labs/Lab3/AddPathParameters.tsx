import React from "react";
import { useParams } from "react-router-dom";
export default function AddPathParameters() {
  const { a, b } = useParams();
  return (
<<<<<<< HEAD
    <div id="wd-add">
      {" "}
      <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
=======
    <div id="wd-add"> <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
