import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
