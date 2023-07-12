import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./components/pages/singup";
import SingIn from "./components/pages/singin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>homepage</div>} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/signin" element={<SingIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
