import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
<<<<<<< HEAD
=======
import TOC from "./TOC";
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import Lab4 from "./Lab4";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./Store";
export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
      <h1>Ghanashyam Vagale Srinivas</h1>
=======
import store from "./Lab4/store";
import { Provider } from "react-redux";
export default function Labs() {
  return (
    <Provider store={store}>
    <div>
    <h1>Ghanashyam Vagale Srinivas </h1>
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
      <h1>Section 03</h1>
      <p>
        Link to my <a id="wd-github" href="https://github.com/GhanashyamVagale/kanbas-react-web-app">
          <strong>GitHub</strong>
        </a> repository.
      </p>
      <hr />
<<<<<<< HEAD
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}
=======
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
      </Routes>
    </div>
    </Provider>
  );
}

>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
