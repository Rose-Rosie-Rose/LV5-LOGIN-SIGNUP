import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUpPage from "./components/pages/singup";
import SingInPage from "./components/pages/singin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>homepage</div>} />
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="/signin" element={<SingInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
