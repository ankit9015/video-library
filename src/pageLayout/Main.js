import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

function Main() {
  return (
    <div className="main main--grid">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;
