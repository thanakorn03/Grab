import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import AddRestaurant from "./page/AddRestaurant";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRestaurant />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
