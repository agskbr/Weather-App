import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage.jsx";
import AboutPage from "./views/AboutPage/AboutPage.jsx";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
