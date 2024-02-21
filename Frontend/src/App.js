import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Addition from "./pages/Addition";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addition" element={<Addition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
