import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Buy from "./pages/Buy.tsx";
import Catagory from "./pages/Catagory.tsx";
import Fav from "./pages/Fav.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/catagory" element={<Catagory />}></Route>
        <Route path="/fav" element={<Fav />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
