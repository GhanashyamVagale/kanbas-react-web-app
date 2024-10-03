import { Navigate, Route, Routes } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

const Labs = () => {
  return (
    <div id="wd-labs">
      <h1>Ghanashyam Vagale Srinivas</h1>
      <h1>Section 03</h1>
      <p>
        Link to my <a id="wd-github" href="https://github.com/GhanashyamVagale/kanbas-react-web-app">
          <strong>GitHub</strong>
        </a> repository.
      </p>
      <hr />
      <TOC />
      <hr />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
};

export default Labs;
