import React from "react";
<<<<<<< HEAD
// import logo from "./logo.svg";
import "./App.css";
=======
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
=======
    <div>
    <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
    </div>
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
    </HashRouter>
  );
}
