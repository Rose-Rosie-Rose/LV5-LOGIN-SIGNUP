import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./components/pages/singup/styled";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>homepage</div>} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
