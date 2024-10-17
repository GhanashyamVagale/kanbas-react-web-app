import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";

const PathParameters = () => {
  return (
    <div id="wd-path-parameters">
      <h2>Path Parameters</h2>
      <Link to="/Labs/Lab3/add/1/2">1 + 2</Link><br />
      <Link to="/Labs/Lab3/add/3/4">3 + 4</Link><br /><br />
      <Routes>
        <Route path="add/:a/:b" element={<AddPathParameters />} />
      </Routes>
  </div>

  );
};

export default PathParameters;
