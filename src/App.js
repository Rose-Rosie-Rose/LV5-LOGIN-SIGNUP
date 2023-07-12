import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>homepage</div>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
