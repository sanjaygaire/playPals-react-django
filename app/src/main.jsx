import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./Register";
import VerifyOtp from "./VerifyOtp";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
        <Bottom/>
    </BrowserRouter>
  </React.StrictMode>
);
