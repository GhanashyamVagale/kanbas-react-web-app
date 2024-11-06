import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div className="w-25" id="wd-add-redux">
      <h1>Add Redux</h1>
<<<<<<< HEAD
      <h2>
        {a} + {b} = {sum}
      </h2>
      <input
        type="number"
        defaultValue={a}
=======
      <h2>{a} + {b} = {sum}</h2>
      <input type="number" defaultValue={a}
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control" />
      <input type="number" defaultValue={b}
        onChange={(e) => setB(parseInt(e.target.value))}
<<<<<<< HEAD
        className="form-control"
      />
      <button
        className="btn btn-primary"
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}
      >
        Add Redux{" "}
      </button>
=======
        className="form-control" />
      <button className="btn btn-primary" id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}>
        Add Redux </button>
      <hr/>
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
    </div>
  );
}
