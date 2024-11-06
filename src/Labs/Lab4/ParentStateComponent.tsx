import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";
export default function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
    <div>
      <h2>Counter {counter}</h2>
      <ChildStateComponent counter={counter} setCounter={setCounter} />
      <hr />
    </div>
<<<<<<< HEAD
  );
}
=======
);}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
